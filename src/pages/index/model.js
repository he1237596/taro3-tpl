/*
 * @Author: Chris
 * @Date: 2023-05-16 15:44:15
 * @LastEditors: Chris
 * @LastEditTime: 2023-05-16 15:44:17
 * @Descripttion: **
 */
/*
 * @Author: Chris
 * @Date: 2021-08-28 15:40:34
 * @LastEditors: Chris
 * @LastEditTime: 2021-08-28 16:16:49
 * @Descripttion: **
 */
import Taro from '@tarojs/taro';
import { login } from '@services/login'

export default {
  namespace: 'index',
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