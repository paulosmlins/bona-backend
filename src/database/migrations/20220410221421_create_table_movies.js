/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('movies', function(table) {
      table.text('tconst').primary()
      table.text('titleType')
      table.text('primaryTitle')
      table.text('originalTitle')
      table.boolean('isAdult')
      table.integer('startYear')
      table.integer('endYear')
      table.integer('runtimeMinutes')
      table.specificType('genres', 'text ARRAY')

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('movies')
};
