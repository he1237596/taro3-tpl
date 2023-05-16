/*
 * @Author: Chris
 * @Date: 2019-07-01 17:54:54
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-14 23:25:11
 * @Descripttion: 个人决定
 *  1.可以都放在该文件夹下，方便统一管理，不同模块调用对应model
 *  2.可以放在对应模块文件夹，模块划分更清晰，更容易维护
 */
import common from './common.js';
import index from '../pages/index/model';
import login from '../pages/login/model';
// import test from '../pages/test/model';

export default [common,index,login]