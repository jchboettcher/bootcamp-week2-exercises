const casual = require('casual')

casual.define('post', ({ userId }) => ({
    id: casual.uuid,
    author: userId,
    content: casual.sentence,
    date_posted: casual.date(format = 'YYYY-MM-DD'),
    likes: casual.integer(from = 0, to = 1000)
}))

const postData = []
const userData = require('../data/users')

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  postData.push(casual.post({ userId }))
}

module.exports = postData
