// const BaseModel = require('./BaseModel')
const { Model, BelongsToOneRelation } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class Pet extends Model {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pets.ownerId',
          to: 'users.id',
        },
      },
    }

  }
  
  static get virtualAttributes() {
    return ['isAlligator', 'isMammal']
  }

  get isAlligator() {
    return this.type === 'ALLIGATOR'
  }

  get isMammal() {
    return this.type === 'DOG' || this.type === 'CAT'
  }
}

module.exports = Pet
