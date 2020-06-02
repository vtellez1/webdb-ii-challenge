
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1GNEK13ZX3R298984', make: 'Toyota', model: 'Corolla', mileage: 34000, transmission: '4-speed', status_of_title: 'clean'},
        {vin: '1GNEK13ZX3R298985', make: 'Tesla', model: 'Model X', mileage: 14000},
        {vin: '1GNEK13ZX3R298986', make: 'Vroom', model: 'Best Model', mileage: 7000}
      ]);
    });
};
