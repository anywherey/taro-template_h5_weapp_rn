import Taro from "@tarojs/taro";

let RN: any = {};
if (process.env.TARO_ENV === "rn") {
  RN = require("react-native");
}

export const isAndriod = () => {
  if (process.env.TARO_ENV === "rn") {
    return RN.Platform.OS === "android";
  }
  const { platform, system } = Taro.getSystemInfoSync();
  return platform === "devtools"
    ? system.includes("Android")
    : platform === "Android";
};

export const initBackHandler = (callback: () => boolean = () => false) => {
  // callback 返回 true 阻止返回 默认返回false
  if (process.env.TARO_ENV === "rn") {
    RN.BackHandler.addEventListener("hardwareBackPress", function() {
      if (Taro.getCurrentPages().length === 1) {
        const result = callback();
        !result && Taro.navigateBack({ delta: 1 });
        return result;
      }
      return callback();
    });
  }
};
