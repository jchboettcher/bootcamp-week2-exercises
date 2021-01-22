const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const edwardUser = await User.query().findById('479b99e3-efd5-42a0-a917-f37ef7d4d096')
  console.log(edwardUser)

  // Use that instance to create a new pet related that user
  const edwardPet = await edwardUser.$relatedQuery('pets')
    .insert({ name: 'Glub', type: 'FISH' })
    .returning('*')
  console.log(edwardPet)

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const petsAndChildren = await edwardUser.$fetchGraph('[pets, children]')
  console.log(petsAndChildren.pets)
  console.log(petsAndChildren.children)

  // -----
  cleanup()
}

run()
