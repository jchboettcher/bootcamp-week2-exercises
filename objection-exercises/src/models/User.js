// const BaseModel = require('./BaseModel')
// const Model = require('objection')
const { Model, HasManyRelation, ManyToManyRelation } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
      children: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id',
        },
      },
      parents: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId'
          },
          to: 'users.id',
        },
      },
    }
  }
  
  static get virtualAttributes() {
    return ['fullName', 'isAdult', 'usesGmail']
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  get isAdult() {
    return this.age >= 18
  }

  get usesGmail() {
    return this.email.includes('gmail')
  }
}

module.exports = User
