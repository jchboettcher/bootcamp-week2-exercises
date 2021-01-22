const casual = require('casual')

casual.define('user', () => {
  const first_name = casual.first_name
  const last_name = casual.last_name;
  return {
    id: casual.uuid,
    email: casual.email,
    password: casual.password,
    first_name: first_name,
    last_name: last_name,
    date_of_birth: casual.date(format = 'YYYY-MM-DD'),
    bio: `Hi! My name is ${first_name} ${last_name} and my favorite color is ${casual.safe_color_name}.`
  }
})

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
