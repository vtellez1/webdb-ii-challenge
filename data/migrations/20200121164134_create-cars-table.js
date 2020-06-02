
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
    tbl.string('vin', 17)
        .unique()
        .notNullable();
    tbl.string('make')
        .notNullable()
        .index();
    tbl.string('model')
        .notNullable()
        .index();
    tbl.integer('mileage')
        .notNullable();
    tbl.string('transmission');
    tbl.string('status_of_title');

    tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
