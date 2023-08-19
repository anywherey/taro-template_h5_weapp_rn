import { View } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'
import TabBar from '@/components/TabBar'
import { StatusBar, CustomScrollView } from '@/components'
import { useRef, useCallback, useState } from 'react'
import { scrollTop } from '@/utils/scrollTop'
import Taro from '@tarojs/taro'
import setNavigationBarTitle from '@/utils/setTitle'
import './index.less'
const Index = () => {
  setNavigationBarTitle('首页')
  const ScrollViewRef = useRef() as React.MutableRefObject<any>
  useLoad(() => {
    console.log('PageHome loaded.')
  })
  const onRefresh = useCallback(() => {
    Taro.showLoading({
      title: '加载中',
      mask: true,
    })
    setTimeout(() => {
      Taro.hideLoading()
    }, 1000)
    scrollTop(ScrollViewRef)
  }, [ScrollViewRef])
  return (
    <View onClick={() => {
      // navigateTo({url:'/pages/page1/page1'})
      // navigate('/pages/page1/page1',{
      //   replace:true
      // })
    }}>
      {/* <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0)' translucent /> */}
      <CustomScrollView onRefresh={onRefresh} ref={ScrollViewRef}>

        <View onClick={()=>navigateTo({url:'/pages/subPages/page1/page1'})} style={{ width: '100%', height: '140px', backgroundColor: 'skyblue', marginBottom: '40px' }}>
          到page1页面
        </View>
        {[...Array(5)].map((_, index) => (
        <View
          key={index}
          style={{
            width: '100%',
            height: '340px',
            backgroundColor: 'skyblue',
            marginBottom: '40px'
          }}
        />
      ))}
      </CustomScrollView>
      <TabBar tab={0}></TabBar>
    </View>
  )
}
export default Index
