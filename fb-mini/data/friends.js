const casual = require('casual')

casual.define('friend', ({ user1Id, user2Id }) => {
    const accepted = casual.boolean
    return {
        id: casual.uuid,
        requestor: user1Id,
        requested: user2Id,
        date_requested: casual.date(format = 'YYYY-MM-DD'),
        status: accepted,
        date_accepted: accepted ? casual.date(format = 'YYYY-MM-DD') : null,
    }
})
3
const friendData = []
const userData = require('../data/users')

for (let i = 0; i < 20; ++i) {
  const user1Id = casual.random_element(userData).id
  const user2Id = casual.random_element(userData).id
//   while (user1Id == user2Id) {
//     const user2Id = casual.random_element(userData).id
//   }
  friendData.push(casual.friend({ user1Id, user2Id }))
}

module.exports = friendData
