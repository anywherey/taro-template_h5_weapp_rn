import React from "react";

/*
  滚到顶部
 */
export const scrollTop = (ScrollViewRef: React.MutableRefObject<any>) => {
  switch (process.env.TARO_ENV) {
    case "rn":
      // RN端：直接调用react-native ScrollView组件的api
      ScrollViewRef.current.scrollTo({ y: 0 });
      break;
    case "weapp":
      // 小程序端：操控TaroElement实现滚动到顶部。ref.current返回的就是一个TaroElement
      ScrollViewRef.current.setAttribute("scrollTop", 0);
      break;
    case "h5":
      // H5端
      ScrollViewRef.current.scrollTop = 0;
      break;
    default:
      break;
  }
};
