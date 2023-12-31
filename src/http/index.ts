import axios from "axios";
import axiosRetry from "axios-retry";
import adapter from "axios-miniprogram-adapter";
import {
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { CustomAxiosRequestConfig } from "@/interface/http";
import {generateSHA256Hash} from '@/utils/hash';
import {CancelTokenInfo} from '@/interface/http'
const whiteRetry = new Set(["ECONNABORTED", undefined, 0]);

let config: CustomAxiosRequestConfig = {
  baseURL: process.env.BASE_URL, // 接口请求地址
  timeout: 15 * 1000, // 请求超时设置
  withCredentials: false, // 跨域请求是否需要携带 cookie
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  validateStatus() {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true;
  },
};
// 把axios的默认适配器改成xhr
process.env.TARO_ENV !== "h5" ? (config = { ...config, adapter: adapter }) : "";
// 创建 axios 请求实例
const serviceAxios = axios.create(config);

axiosRetry(serviceAxios, {
  retries: 2, // 重复请求次数
  shouldResetTimeout: true, //  重置超时时间
  retryDelay: (retryCount) => {
    return retryCount * 10000; // 重复请求延迟
  },
  retryCondition: (err) => {
    // true为打开自动发送请求，false为关闭自动发送请求
    const { code, message } = err;
    return whiteRetry.has(<string>code) || message.includes("timeout");
  },
});

// 请求拦截器
serviceAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
serviceAxios.interceptors.response.use(
  (res: AxiosResponse) => {
      return res;
  },
  (err: AxiosError) => {
      if (err.code !== 'ERR_CANCELED') {
          let url = err.config?.url;
          const index = cancelTokens.findIndex((tokenInfo) => tokenInfo.url === url);
          if (index !== -1) {
              const {source} = cancelTokens[index];
              source.cancel(`接口${url}已经被取消了,${url}`);
              cancelTokens.splice(index, 1);
          }
      }
      return Promise.reject(err);
  }
);

// 取消请求的取消令牌集合
const cancelTokens: CancelTokenInfo[] = [];
// 统一发起请求的函数
async function request<T>(options: AxiosRequestConfig) {
  try {
      const {url} = options;
      let response;
      // 生成取消令牌并添加到集合中
      if (url) {
          const source = axios.CancelToken.source();
          const tokenInfo: CancelTokenInfo = {url, source, flag: generateSHA256Hash()};
          cancelTokens.push(tokenInfo);
          response = await serviceAxios.request<T>({
              ...options,
              cancelToken: source.token
          });
      } else {
          response = await serviceAxios.request<T>(options);
      }
      const {status, data} = response;
      // 处理 HTTP 状态码
      if (status < 200 || status >= 500) {
          return Promise.reject();
      }
      return Promise.resolve(data);
  } catch (error: any) {
      if (error.code === 'ERR_CANCELED') {
          return Promise.resolve('接口取消');
      } else {
          return Promise.reject(error);
      }
  }
}

// 取消指定请求
export function cancelRequest(url?: string) {
  if (url) {
      const reversedTokens = [...cancelTokens].reverse();
      const index = reversedTokens.findIndex((tokenInfo) => tokenInfo.url === url);
      if (index !== -1) {
          const {source, flag} = reversedTokens[index];
          source.cancel(`接口${url}已经被取消了,${url},${flag}`);
          // 获取实际数组中对应的索引
          const actualIndex = cancelTokens.length - 1 - index;
          return cancelTokens.splice(actualIndex, 1);
      } else {
          return console.error('找不到指定请求和标识符的取消令牌');
      }
  } else {
      if (cancelTokens.length !== 0) {
          for (const tokenInfo of cancelTokens) {
              tokenInfo.source.cancel();
          }
          return (cancelTokens.length = 0); // 清空请求列表
      } else {
          return console.log('没有正在请求的接口');
      }
  }
}

export default request;
