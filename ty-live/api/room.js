const request = require('/utils/request.js')

function initRoom(roomId) {
  return request({
    url: '/api/room?roomId' + roomId
  })
}

function generateSig(userId) {
  return request({
    url: '/api/room/generateSig?userId' + userId
  })
}

module.exports.initRoom = initRoom
module.exports.initRoom = generateSig