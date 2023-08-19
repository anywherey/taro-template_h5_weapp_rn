import { View } from '@tarojs/components'
import setNavigationBarTitle from '@/utils/setTitle'
import { useLoad,navigateTo } from '@tarojs/taro'
import TabBar from '@/components/TabBar'
import './index.less'
const Index=()=>{
  setNavigationBarTitle('首页')
  useLoad(() => {
    console.log('PageHome loaded.')
  })
    return (
      <View onClick={()=>{
        // navigateTo({url:'/pages/page1/page1'})
        // navigate('/pages/page1/page1',{
        //   replace:true
        // })
      }}>test1
      <TabBar tab={0}></TabBar>
      </View>
    )
}
export default Index
