
exports.up = function(knex, Promise) {
  Promise.all([
      knex.schema.createTable('map', (table) => {
          table.increments().primary()
          table.string('latitude')
          table.string('longitude')
      })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('map')
};
