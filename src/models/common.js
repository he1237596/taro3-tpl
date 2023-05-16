/*
 * @Author: Chris
 * @Date: 2019-07-01 18:05:39
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-14 23:23:39
 * @Descripttion: 公共models，比如通知消息类，全局可用
 */
import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    number:0
  },

  effects: {
    // *getList({ payload },{ select, call, put }){
    //   const number = yield select(state => state.number);
    // }
  },

  reducers: {
    save(state, { payload }) {
      console.log(state,payload)
      return { ...state, ...payload };
    },
  },
};