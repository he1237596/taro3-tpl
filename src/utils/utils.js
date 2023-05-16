/*
 * @Description: 工具库
 * @Author: Chris
 * @Date: 2019-07-02 10:52:47
 * @LastEditTime: 2019-10-15 02:03:05
 * @LastEditors: Chris
 */
import JSEncrypt from './jsencrypt.min.js';

/**
 * @description 根据传入的key，加密字符串
 * @export
 * @param {*} publicKey 加密的publicKey
 * @param {string} [encrytStr=''] 待加密的字符串
 * @returns
 */
export function getEncryptedStr(encrytStr = '', publicKey) {
  if (!publicKey || !encrytStr) return encrytStr;
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const ret = encrypt.encrypt(encrytStr);
  return ret;
}


/**
 * 生成唯一uuid
 */
export function uuids() {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  // eslint-disable-next-line
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  // eslint-disable-next-line
  s[8] = s[13] = s[18] = s[23] = '-';
  const uuid = s.join('');
  return uuid;
}

/**
 * 验证手机号
 * @param {string} value 
 * @returns {bool}
 */
export function validatePhone(value) {
  if (!/^1[3456789]\d{9}$/.test(value)) {
    return false;
  }
  return true;
};

export function formatTime(timeStamp) {
  const date = new Date(timeStamp);
  const y = date.getFullYear();
  const m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
}