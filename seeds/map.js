
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('map').del()
    .then(function () {
      // Inserts seed entries
      return knex('map').insert([
        {latitude: 34.072873, longitude: -118.260519},
        {latitude: 34.056329, longitude:-118.246771},
        {latitude: 34.048569, longitude: -118.252892},
        {latitude: 34.058428, longitude: -118.279427},
        {latitude:37.78825, longitude:-122.4324}
        
      ]);
    });
};
