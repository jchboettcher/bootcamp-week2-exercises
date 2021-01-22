// const BaseModel = require('./BaseModel')
// const BelongsToOneRelation = require('objection')
const Model = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class Relation extends Model {
  static get tableName() {
    return 'relations'
  }
}

module.exports = Relation
