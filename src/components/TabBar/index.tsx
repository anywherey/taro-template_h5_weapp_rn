import { Image, View, Text } from "@tarojs/components";
import { FC, useState, lazy } from "react";
import home from '@/assets/tab/home.svg'
import homeActive from '@/assets/tab/home_active.svg'
import community from '@/assets/tab/community_light.svg'
import communityActive from '@/assets/tab/community_light_active.svg'
import my from '@/assets/tab/my.svg'
import myActive from '@/assets/tab/my_active.svg'
import { navigateTo,redirectTo } from "@tarojs/taro";
import { Props } from "./type";
import './index.less'
const TabBar: FC<Props> = ({ tab }) => {
  let isTitle = -1
  function clickTab(item) {
    switch (item) {
      case 0:
        if (isTitle !== 0) {
          redirectTo({ url: '/pages/index/index' })
        }
        break;
      case 1:
        if (isTitle !== 1) {
          redirectTo({ url: '/pages/community/index' })
        }
        break;
      case 2:
        if (isTitle !== 2) {
          redirectTo({ url: '/pages/my/index' })
        }
        break;
      default:
        break;
    }
  }
  switch (tab) {
    case 0:
      isTitle = 0
      break;
    case 1:
      isTitle = 1
      break;
    case 2:
      isTitle = 2
      break;
    default:
      break;
  }
  return (
    <View className="tabbbar" >
      <View className="tabbbar-wrap">
        <View className="tabbbar-wrap__item" onClick={() => clickTab(0)}>
          <Image className="tabbbar-wrap__img" src={isTitle === 0 ? homeActive : home} />
          <View>首页</View>
        </View>
        <View className="tabbbar-wrap__item" onClick={() => clickTab(1)}>
          <Image className="tabbbar-wrap__img" src={isTitle === 1 ? communityActive : community} />
          <View>社区</View>
        </View>
        <View className="tabbbar-wrap__item" onClick={() => clickTab(2)}>
          <Image className="tabbbar-wrap__img" src={isTitle === 2 ? myActive : my} />
          <View>我的</View>
        </View>
      </View>
      <View className="tabbbar-safe_area"></View>
    </View>
  )
}
export default TabBar;
