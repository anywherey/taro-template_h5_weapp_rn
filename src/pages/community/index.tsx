import DiscussCard from '@/components/discussCard/index'
import { View,Text } from '@tarojs/components'
// import { Cart, Home } from '@nutui/icons-react-taro';
// import { Input, Button, Badge  } from '@nutui/nutui-react-taro'
import { communityListAPI } from '@/api/community'
import { navigateTo } from '@tarojs/taro'
import TabBar from '@/components/TabBar'
import setNavigationBarTitle from '@/utils/setTitle'
import './index.less'
import { useEffect, useState } from 'react'
const Community = () => {
  setNavigationBarTitle('社区')
  const [communityList, setCommunityList] = useState(Array)
  const [paramsQuery, setParamsQuery] = useState({
    communityType: ''
  })
  // setCommunityList([
  //       {
  //           discussId:1,
  //           userId:2,
  //           nickName:'yessss',
  //           user_pic:'',
  //           discussContent:'哈哈哈哈哈',
  //           userIpBelong: '广东',
  //       discussPics: ['http.ddd.com', 'http.ddd.com', 'http.ddd.com']
  //       },
  //       {
  //           discussId:2,
  //           userId:3,
  //           nickName:'',
  //           user_pic:'',
  //           discussContent:'哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌',
  //           userIpBelong: '广东',
  //       discussPics: ['http.ddd.com', 'http.ddd.com', 'http.ddd.com']
  //       },
  //       {
  //           discussId:2,
  //           userId:3,
  //           nickName:'',
  //           user_pic:'',
  //           discussContent:'哈哈哈哈哈刚刚灌灌灌灌灌',
  //           userIpBelong: '广东',
  //       discussPics: ['http.ddd.com', 'http.ddd.com', 'http.ddd.com']
  //       },{
  //           discussId:1,
  //           userId:2,
  //           nickName:'',
  //           user_pic:'',
  //           discussContent:'哈哈哈哈哈',
  //           userIpBelong: '广东',
  //       discussPics: ['http.ddd.com', 'http.ddd.com', 'http.ddd.com']
  //       },
  //       {
  //           discussId:2,
  //           userId:3,
  //           nickName:'',
  //           user_pic:'',
  //           discussContent:'哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌哈哈哈哈哈刚刚灌灌灌灌灌',
  //           userIpBelong: '广东',
  //       discussPics: ['http.ddd.com', 'http.ddd.com', 'http.ddd.com']
  //       },
  //       {
  //           discussId:2,
  //           userId:3,
  //           nickName:'',
  //           user_pic:'',
  //           discussContent:'哈哈哈哈哈刚刚灌灌灌灌灌',
  //           userIpBelong: '广东',
  //       discussPics: ['http.ddd.com', 'http.ddd.com', 'http.ddd.com']
  //       },
  //   ])
  useEffect(() => {
    communityListAPI(paramsQuery).then((res: any) => {
      console.log(res)
      if (res.code === 200) {
        const newData = res.data
        newData.map((item: any) => {
          item.discussPics = item.discussPics.split(',')
          return item
        })
        console.log(newData)
        setCommunityList([...newData])
      }
    })
  }, [])
  const options = [
    {
      label: '所有',
      value: '0',
      communityType: '',
    },
    {
      label: '分享',
      value: '1',
      communityType: '0',
    },
    {
      label: '闲聊',
      value: '2',
      communityType: '1',
    },
  ]
  function toCardDetail(item:any) {
    // navigate('/community/detail',{
    //   state:{"discussId": item.discussId
    // }
    // })
    console.log('go')
  }
  function changeSelector(item:any) {
    communityListAPI({
      communityType: item.communityType
    }).then((res: any) => {
      console.log(res)
      if (res.code === 200) {
        const newData = res.data
        newData.map((item: any) => {
          item.discussPics = item.discussPics.split(',')
          return item
        })
        console.log(newData)
        setCommunityList([...newData])
      }
    })
  }
  return (
    <View className='community'>
      {/* <View className='community-top'>
        <View><Cart fontSize='22px' className='community-icon' /><Text>社区统计</Text></View>
        <Badge className='community-top__badge' content='..'>
          <Home fontSize='22px' className='community-icon' />
        </Badge>
      </View>
      <View className='community-search' onClick={()=>navigateTo({url:'/community/searchPage'})}>
      "🔍"
        <Input
          className='community-search__input'
          placeholder="去搜索社区内容"
        />
        <Button className='community-search__button' size="small" type="primary">去搜索</Button>
      </View>
      {options.map(item=>{
        return <Button className='community-selector' key={item.label} onClick={changeSelector(item)}>{item.label}</Button>
      })} */}
      {/* <Selector className='community-selector'
        options={options}
        defaultValue={['0']}
        onChange={changeSelector}
      /> */}
      {/* <View className='community-discuss'>
        {communityList.map((item: any, index: number) => {
          return (<DiscussCard className="outdiscusscard" discussList={item} key={index} onClick={() => toCardDetail(item)} />)
        })}
      </View> */}
      <TabBar tab={1}></TabBar>
    </View>
  )
}
export default Community
