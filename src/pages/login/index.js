/*
 * @Description: 登录
 * @Author: Chris
 * @Date: 2019-07-02 10:56:49
 * @LastEditTime: 2023-05-16 16:44:34
 * @LastEditors: Chris
 */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtAvatar } from 'taro-ui'
import { connect } from 'react-redux'
import logo from '../../asset/logo.png'
// import { submit } from '../../store/login/actions'

import './index.scss'

@connect(({ login, loading }) => ({
  // ...login,
  userInfo: login.userInfo,
  loading: loading.effects['login/submit']
}))

class Login extends Component {
  config = {
    navigationBarTitleText: '登录',
    navigationBarBackgroundColor: '#1C2736',//头背景
  }
  constructor() {
    super(...arguments)
    this.state = {
      userName: '13729747951',
      password: '123456',
      clientType: 'applets',
    }
  }
  handleChange(value, e) {
    const { currentTarget: { id } } = e
    this.setState({
      [id]: value
    })
    return value
  }

  onSubmit(e) {
    // console.log(typeof e)
    // console.log(e[0])
    e[0].preventDefault()
    const { userName, password, clientType } = this.state;
    const { dispatch } = this.props;
    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(userName)) {

      Taro.showToast({
        title: '手机号码格式错误',
        icon: 'none',
        mask: true,
      });
      return false
    }
    dispatch({
      type: 'login/submit',
      payload: {
        userName, password, clientType
      }
    }).then(res => {
      if (res.code === 200) {
        Taro.setStorageSync('userInfo', res.data)
        Taro.redirectTo({
          url: '/pages/index/index',
        })
      } else {
        Taro.showToast({
          title: res.msg || res.code,
          icon: 'none',
          status: 'error',
        });
      }
    })
  }

  render() {
    const { userName, password } = this.state;
    const { loading, userInfo } = this.props;
    console.log(this.props)
    console.log(userInfo)
    return (
      <View className='main'>
        <View className='logoWrap'>
          <AtAvatar image={logo} className='logoImg'></AtAvatar>
          <View className='mesName'>云 智 控</View>
        </View>
        <AtForm className='form'
          onSubmit={this.onSubmit.bind(this)}
        >
          <View className='fileItem'>
            <Text className='iconfont at-icon at-icon-user'></Text>
            <AtInput
              className='mg-input'
              name='userName'
              type='text'
              placeholder='请输入账号'
              value={userName}
              onChange={this.handleChange.bind(this)}
              border={false}
              cursorSpacing={80}
              confirmType='done'
            />
          </View>
          <View className='fileItem'>
            <Text className='iconfont  at-icon at-icon-lock'></Text>
            <AtInput
              className='mg-input'
              name='password'
              type='password'
              placeholder='请输入密码'
              value={password}
              onChange={this.handleChange.bind(this)}
              border={false}
              confirmType='done'
            />
          </View>
          <View className='forgetPassword'>
          </View>
          <AtButton formType='submit' type='primary' disabled={loading} className='sub-btn' loading={loading}>登录</AtButton>
        </AtForm>
      </View>
    )
  }
}
export default Login;