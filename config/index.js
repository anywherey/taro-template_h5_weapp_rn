const path = require("path");
const config = {
  projectName: "food-fun-spins",
  date: "2023-7-13",
  designWidth() {
    // 全局使用 Taro 默认的 750 尺寸
    return 750;
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: "src",
  outputRoot: `dist/${process.env.TARO_ENV}`,
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false
    },
  },
  alias: {
    "@": path.resolve(__dirname, "../src"),
  },
  env: {
    BASE_URL: JSON.stringify(process.env.BASE_URL),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  cache: {
    enable: true, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    // 缓存,cache.type 设置为 'filesystem' 是会开放更多的可配置项。
    // 收集在反序列化期间分配的未使用的内存，, 仅当 cache.type 设置为 'filesystem' 时生效。这需要将数据复制到更小的缓冲区中，并有性能成本。
    type: "filesystem",
    buildDependencies: {
      // 是一个针对构建的额外代码依赖的数组对象。webpack 将使用这些项和所有依赖项的哈希值来使文件系统缓存失效。
      config: [__filename],
    },
  },
  mini: {
    postcss: {
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    lessLoaderOption: {
      lessOptions: {
        strictMath: true,
        noIeCompat: true,
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  rn: {
    resolve: {
      include: ['taro-mobile'],
    }
  },

};
module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
