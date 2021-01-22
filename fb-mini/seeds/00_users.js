const userData = require('../data/users')
// console.log(userData)
exports.seed = knex => knex('users').del()
  .then(() => knex('users').insert(userData))
