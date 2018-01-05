
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('map').del()
    .then(function () {
      // Inserts seed entries
      return knex('map').insert([
        {latitude: 34.12426, longitude: -118.4917102},
        {latitude: 34.124101, longitude: -118.492397},
        {latitude: 34.1239419, longitude: -118.4930839},
        {latitude: 34.1237829, longitude: -118.4937708},
        {latitude: 34.127035, longitude: -118.325934}
        
      ]);
    });
};
