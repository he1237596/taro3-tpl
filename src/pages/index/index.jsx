import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtIcon, AtFab } from 'taro-ui'

import './index.scss'

export default class Index extends Component {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
<AtButton type='primary'>按钮文案</AtButton>
<AtButton type='secondary'>按钮文案</AtButton>
        <View className='at-icon at-icon-settings'></View>
        <AtIcon value='clock' size='30' color='#F00'></AtIcon>
        <AtFab>
  <Text className='at-fab__icon at-icon at-icon-menu'></Text>
</AtFab>
      </View>
    )
  }
}
