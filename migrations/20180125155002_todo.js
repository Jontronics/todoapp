// title - text
// priority - integer 1,2,3
// description - text
// done - boolean
// date - date time 


exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.integer('priority').notNullable();
    table.text('description');
    table.boolean('done').default(false).notNullable();
    table.datetime('date').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo');
};