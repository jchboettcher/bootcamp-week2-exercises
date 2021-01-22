exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('author')
    .references('users.id')
    .onDelete('CASCADE')

  table.string('content')
  table.string('date_posted')
  table.integer('likes')
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
  