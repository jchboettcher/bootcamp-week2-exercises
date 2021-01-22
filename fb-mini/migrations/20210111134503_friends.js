exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('requestor')
    .references('users.id')
    .onDelete('CASCADE')

  table
    .uuid('requested')
    .references('users.id')
    .onDelete('CASCADE')
  
  table.string('date_requested')
  table.boolean('status')
  table.string('date_accepted')
})
  
exports.down = async knex => knex.schema.dropTableIfExists('friends')
    