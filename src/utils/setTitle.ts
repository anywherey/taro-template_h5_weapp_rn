import { setNavigationBarTitle as setTitle } from "@tarojs/taro";
let setNavigationBarTitle:Function;
if (process.env.TARO_ENV !== "h5") {
  setNavigationBarTitle=(title)=>{
    setTitle({
      title,
    });
  }
} else {
  setNavigationBarTitle=(title)=>{
    document.title = title;
  }
}
export default setNavigationBarTitle;
