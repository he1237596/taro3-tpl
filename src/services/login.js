/*
 * @Author: Chris
 * @Date: 2019-07-21 15:01:50
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-14 23:18:18
 * @Descripttion: 登录模块服务
 */

import request from '../utils/request'

const LOGIN = '/api/applets/user/login'
const CHANGEPASSWORD = '/api/applets/user/resetPassword/submit'

export function login(data) {//POST
  return request({
    url: LOGIN,
    data,
    method: 'POST',
    loading: false//开启请求loading
  })
}

// export function requestCode(data) {// GET
//   return request({
//     url: `${REQUESTCode}${data}`,
//     method: 'GET'
//   })
// }

export function requestChangePassword(data) {// PUT
  return request({
    url: CHANGEPASSWORD,
    data,
    method: 'PUT'
  })
}
