/*
 * @Author: Chris
 * @Date: 2023-05-16 15:37:38
 * @LastEditors: Chris
 * @LastEditTime: 2023-05-16 15:37:40
 * @Descripttion: **
 */
/*
 * @Description: 项目开发配置
 * @Author: Chris
 * @Date: 2019-07-02 10:50:04
 * @LastEditTime: 2019-10-14 23:37:46
 * @LastEditors: Chris
 */

const ENV = 'dev'
const Config = {
  dev: {
    // 云MES服务的URL
    baseUrl: 'http://120.79.9.183:60002',
    imageBaseUrl: 'https://images.mogulinker.com', // 系统图片的URL
    userPublicKey: '',
    userPublicKeyId: '',
    webServerUrl: 'http://mes-test.mogulinker.com', // 云MES web服务网址
  },
  pro: {

  }
}

export default Config[ENV]
