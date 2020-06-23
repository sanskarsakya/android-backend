
exports.seed = function (knex) {
    return knex('clasz_services').insert([
      {
        "id"        : 1,
        "class_id"  : 1,
        "service_id": 1,
        "amount"    : 2000,
        "year"      : 2020,
        "school_id" : 1,
      },
      {
        "id"        : 2,
        "class_id"  : 1,
        "service_id": 2,
        "amount"    : 1000,
        "year"      : 2020,
        "school_id" : 1,
      }
    ]);
  };
  