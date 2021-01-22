const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  // console.log(await Pet.query())
  const deletePet = await Pet.query().delete().where('type', 'CAT').returning("*")
  console.log(deletePet)

  // -----
  cleanup()
}

run()
