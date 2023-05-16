/*
 * @Author: Chris
 * @Date: 2019-07-21 19:31:58
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-14 23:10:34
 * @Descripttion: **
 */
// import Taro from '@tarojs/taro';
import { login } from '@services/login'

export default {
  namespace: 'login',
  state: {
    userInfo: ''
  },

  effects: {
    *submit({ payload }, { call }) {
      const res = yield call(login, payload);
      return res;
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};