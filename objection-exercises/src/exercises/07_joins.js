const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const userPets = await User.query().withGraphFetched('pets')
  console.log(userPets)

  // Get all users, their pets, AND their children
  const userPetsChildren = await User.query().withGraphFetched('[pets, children]')
  console.log(userPetsChildren)

  // Get all users, their parents, and their grandparents
  const userParents = await User.query().withGraphFetched('[parents, parents.parents]')
  console.log(userParents[0].parents[0])

  // Get all users, their pets, their chilren, and their childrens' pets
  const userChildrenPets = await User.query().withGraphFetched('[pets, children, children.pets]')
  console.log(userChildrenPets[2].children[0])

  // -----
  cleanup()
}

run()
