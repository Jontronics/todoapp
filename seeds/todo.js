
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      const todos = [{
        title:'Build a crud app',
        priority: 1,
        date: new Date()
      }, {
        title:'Walk the dog',
        priority: 3,
        date: new Date()
      }, {
        title:'Build this app',
        priority: 2,
        date: new Date()
      }, {
        title:'Build a crud app today',
        priority: 5,
        date: new Date()
      }];
      
      return knex('todo').insert(todos);
    });
};
