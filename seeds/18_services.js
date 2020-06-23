
exports.seed = function (knex) {
  return knex('services').insert([
    {
      "id"       : 1,
      "name"     : "tuition",
      "school_id": 1,
    },
    {
      "id"       : 2,
      "name"     : "sports",
      "school_id": 1,
    },
    {
      "id"       : 3,
      "name"     : "library",
      "school_id": 1,
    }
  ]);
};
