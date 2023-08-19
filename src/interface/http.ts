import {
  AxiosRequestConfig,
  CancelTokenSource
} from "axios";
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  adapter?: any;
}
// 取消请求的取消令牌集合
export interface CancelTokenInfo {
  url: string;
  source: CancelTokenSource;
  flag: string; //标识
}

