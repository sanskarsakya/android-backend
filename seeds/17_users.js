
exports.seed = function (knex) {
  return knex('users').insert([
    {
      "id"      : 1,
      "username": "puzan",
      "password": "password",
    },
    {
      "id"      : 2,
      "username": "sujan",
      "password": "password",
    },
    {
      "id"      : 3,
      "username": "admin",
      "password": "admin",
    }
  ]);
};
