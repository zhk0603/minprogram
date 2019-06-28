const request = require('../utils/request.js')

/**
 * 登录
 */
function login(code) {
  return request({
    url: '/Wechat/login',
    data: {
      code: code
    }
  })
}

module.exports.login = login