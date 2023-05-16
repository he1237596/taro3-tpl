/*
 * @Author: Chris
 * @Date: 2019-07-21 15:04:12
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-14 23:26:45
 * @Descripttion: 公用服务
 */
import request from '../utils/request'

const NOTICE = '/api/applets/notice/list'
export function getNotice(data) {
  return request({
    url: NOTICE,
    data,
    method: 'POST'
  })
}

export function checkStatus(data) {
  return request({
    url: NOTICE,
    data,
    method: 'POST'
  })
}
