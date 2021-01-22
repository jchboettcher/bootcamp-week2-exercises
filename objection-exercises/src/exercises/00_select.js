const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const allUsers = await User.query()
  console.log(allUsers)

  // Get all pets
  const allPets = await Pet.query()
  console.log(allPets)

  // Get the name and age of all users
  const nameAgeUsers = await User.query().select('firstName', 'lastName', 'age')
  console.log(nameAgeUsers)


  // ------
  cleanup()
})

run()
