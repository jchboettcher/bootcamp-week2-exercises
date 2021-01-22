const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  // await User.query().delete().where('lastName', 'Odinburgh').returning("*")

  const newUser = await User.transaction(async trx => {
    const bob = await User.query(trx)
      .insert({ firstName: 'Bob', lastName: 'Odinburgh', email: 'bobodinburgh@gmail.com', age: 56 })
      .returning('*')
    console.log(bob)
    // for (let i = 0; i < 16; i++) {
    const tweet = await bob.$relatedQuery('pets', trx)
      .insert({ name: 'Tweet', type: 'BIRD' })
      .returning('*')
    // }
    console.log(tweet)
    const numPets = await bob.$relatedQuery('pets', trx).resultSize()
    console.log(numPets)
    // throw new Error('hahaha')

    if (numPets > 15) {
      const deletedPets = await bob.$relatedQuery('pets', trx).delete().where('type', 'BIRD').returning('*')
      console.log(deletedPets)
    }

    return bob;
  })
  console.log(newUser)
  // console.log(await newUser.$relatedQuery('pets').resultSize())






  // -----
  cleanup()
}

run()
