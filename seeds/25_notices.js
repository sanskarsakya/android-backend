
exports.seed = function (knex) {
    return knex('notices').insert([
        {
            "title":"test notice",
            "description": "this is test description"
        }
    ]);
  };
  