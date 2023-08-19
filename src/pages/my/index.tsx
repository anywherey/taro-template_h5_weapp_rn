import React from 'react'
import { Cell, Image, GridView } from '@tarojs/components'
// import { Location,Comment,MoreX,RectRight } from '@nutui/nutui-react-taro/icons'
import { navigateTo } from '@tarojs/taro'
import { useSelector } from 'react-redux';
import setNavigationBarTitle from '@/utils/setTitle'
import { View,CoverImage,Text } from '@tarojs/components'
// import { Right } from '@nutui/icons-react-taro'
import TabBar from '@/components/TabBar'
import './index.less'
const My=()=> {
  setNavigationBarTitle('我的')
    // const userInfo=useSelector(state=>state.user.userInfo)||{nickName:'未登录用户',user_pic:''}
        return (
            <View>
              {/* <Cell className='mgtopnull' title={
                <View className='my-siminfo'>
                  <CoverImage className='my-siminfo__avatar' src='ffsa'/>
                  <Text>用户名</Text>
                </View>
              } extra={<Right />}/> */}
                {/* <Cell
                    center
                    title={userInfo.nickName}
                    icon={<Image width={44} height={44} src={userInfo.user_pic} round />}
                    value={<RectRight onClick={()=>navigate('/my/userinfo')} />}
                />
                <Cell.Group>
                    <Cell title='外卖' />
                    <Grid columnNum={2}>
                    <Grid.Item onClick={()=>navigate('/my/address')} icon={<Location />} text='我的地址' />
                    <Grid.Item icon={<Comment  />} text='我的评价' onClick={()=>navigate('/my/comment')} />
                    </Grid>
                </Cell.Group>
                <Cell.Group>
                    <Cell title='社区' />
                    <Grid columnNum={1}>
                    {
                    <Grid.Item icon={<MoreX  />} text='我的社区' onClick={()=>navigate('/my/community')} />
                    }
                    </Grid>
                </Cell.Group> */}
                  <TabBar tab={2}></TabBar>
            </View>
        )
}
export default My
