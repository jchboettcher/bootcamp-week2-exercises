const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const edwardUser = await User.query().findOne({ firstName: 'Edward' })
  console.log(edwardUser.fullName)
  console.log(edwardUser.isAdult)
  console.log(edwardUser.usesGmail)

  const edwardId = edwardUser.$query().select('id')
  const edwardPet = await Pet.query().findOne({ ownerId: edwardId })
  console.log(edwardPet.isMammal)
  console.log(edwardPet.isAlligator)

  // -----
  cleanup()
}

run()
