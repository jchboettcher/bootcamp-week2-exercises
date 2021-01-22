const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!


  // Get all users with a specific name (pick it from your database)
  const terryUsers = await User.query().where('firstName', 'Adele')
  console.log(terryUsers)

  // Do the same with object notation
  const terryUsers2 = await User.query().where({ firstName: 'Adele' })
  console.log(terryUsers2)

  // Get all DOGS and BIRDS
  const dogBirds = await Pet.query().whereIn('type', ['BIRD', 'DOG'])
  console.log(dogBirds)

  // -----
  cleanup()
}

run()
