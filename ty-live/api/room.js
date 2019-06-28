const request = require('../utils/request.js')

function initRoom(roomId) {
  return request({
    url: '/Wechat/CheckRoom?roomId=' + roomId
  })
}

function generateSig(userId) {
  return request({
    url: '/Wechat/Sign',
    method: 'POST',
    data: {
      identifier: userId
    }
  })
}

module.exports.initRoom = initRoom
module.exports.generateSig = generateSig