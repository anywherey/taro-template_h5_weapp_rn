import { View } from "@tarojs/components";
import "./index.less";
import { TaroSafeAreaViewType } from "./type";

let SafeAreaView: any;
if (process.env.TARO_ENV === "rn") {
  SafeAreaView = require("react-native-safe-area-context").SafeAreaView;
}

const TaroSafeAreaView: TaroSafeAreaViewType = props => {
  const { className = "", style = {}, edges = ["right", "left"] } = props;

  if (process.env.TARO_ENV === "rn") {
    return (
      <SafeAreaView
        edges={edges}
        className={`safe-area-view ${className}`}
        style={style}
      >
        {props.children}
      </SafeAreaView>
    );
  }
  return (
    <View className={`safe-area-view ${className}`} style={{ ...(style as object) }}>
      {props.children}
    </View>
  );
};


export default TaroSafeAreaView;
