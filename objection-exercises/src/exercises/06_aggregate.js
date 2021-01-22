const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const num = await User.query().resultSize()
  console.log(num)

  // Get the average age of users
  const avg = await User.query().avg('age')
  console.log(avg)

  // Get the total number of dogs
  const numDogs = await Pet.query().where('type','DOG').resultSize()
  console.log(numDogs)

  // -----
  cleanup()
}

run()
