
import { FC } from 'react'
import './index.less'
import imgerro from './pics/404.png'
import { View,Text } from '@tarojs/components'
const NotFound: FC= ({ ...rest }) => {
    function back() {
        // navigate(-1)
    }
    return (
        <View className='missing' {...rest}>
            <img className='missing-pic' src={imgerro} alt='' />
            <View className='missing-title' >页面出错</View>
            <button className='missing-subtitle' onClick={back} >回到上一页</button>
        </View>
    )
}
export default NotFound
