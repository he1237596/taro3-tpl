/*
 * @Description: 网络请求
 * @Author: Chris
 * @Date: 2019-07-02 10:51:30
 * @LastEditTime: 2019-10-14 22:58:11
 * @LastEditors: Chris
 */
import Taro from '@tarojs/taro'
import Config from '../config'
import { getEncryptedStr } from './utils';

const { baseUrl, userPublicKey, userPublicKeyId } = Config
const getExtraHeader = () => {
  // 拿到本地存储的信息
  const userInfo = Taro.getStorageSync('userInfo');
  if (!userInfo) return null;
  const { id, token } = userInfo;
  const timestamp = Date.now();
  const signature = getEncryptedStr(token, userPublicKey);
  // 将要放到请求头的数据返回
  return {
    keyId: userPublicKeyId,
    signature,
    sessionId: id,
    timestamp,
  };
};

export default (options = {}) => {

  const defaultSetting = {
    method: 'GET',
    data: {},
    header: {
      'Content-Type': 'application/json',
      // 'Content-Type': options.url.indexOf('getQiNiuToken') !== -1 ? 'application/x-www-form-urlencoded': 'application/json',
    }
  }
  // 判断是否需要添加加密
  if (!options.noExtraHeader) {
    defaultSetting.header = {
      ...defaultSetting.header,
      ...getExtraHeader(),
    };
  }
  if (options.loading) {
    Taro.showLoading({
      title: '请稍后',
      mask: true,
    });
  }

  return Taro.request({
    ...defaultSetting,
    ...options,
    url: options.baseUrl || baseUrl + options.url,
  }).then((res) => {
    if (options.loading) {
      Taro.hideLoading()
    }
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {

      if (data.code && data.code !== 200) {
        Taro.showToast({
          title: `${data.msg}` || data.code,
          icon: 'none',
          mask: true,
        });
        if (data.code === 609 || data.code === 498) {//未登录
          Taro.redirectTo({
            url: '/pages/login/index',
          })
          return;
        }
      } else {

      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  }).catch(() => {
    if (!options.hideLoading) {
      Taro.hideLoading()
    }
    Taro.showToast({
      title: '网络错误',
      icon: 'none',
    });
  })
}