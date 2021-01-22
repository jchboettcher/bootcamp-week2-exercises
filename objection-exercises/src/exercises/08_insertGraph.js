const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey

  const graph = await User.query().insertGraph({
    email: 'peterbynum@gmail.com',
    firstName: 'Peter',
    lastName: 'Bynum',
    pets: [
      {
        type: 'DOG',
        name: 'Rocco',
      },
      {
        type: 'DOG',
        name: 'Rosey',
      }
    ]
  })
  console.log(graph)

  // -----
  cleanup()
}

run()
