import React, { memo } from 'react'
import Taro from '@tarojs/taro'
import { Button, ButtonProps } from '@tarojs/components'

import './index.less'


const OutIcon: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {

  const handleClick = () => {
    Taro.navigateBack()
  }

  return (
    <Button
      onClick={handleClick}
      {...rest}
      className={`btn-circle ${rest.className}`}
    >
      {children}
    </Button>
  )
}

export default memo(OutIcon)
