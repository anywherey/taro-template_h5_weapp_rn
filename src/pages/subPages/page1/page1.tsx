import { useSelector,useDispatch } from "react-redux";
import {increment} from '@/store/slice/counter'
import { View } from '@tarojs/components'
import {Back } from '@/components'
import setNavigationBarTitle from '@/utils/setTitle'
import './page1.less'
const Page1 = (data:any) => {
  setNavigationBarTitle('page1')
  const count=useSelector((state:any)=>state.counter)
  const state=useSelector((state:any)=>state)
  const dispatch=useDispatch()
  return (
    <View>
      <View className="page1" onClick={()=>dispatch(increment())}>{count.value}</View>
      <Back />
    </View>
  );
};
export default Page1;
