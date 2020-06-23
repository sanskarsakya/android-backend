
exports.seed = function (knex) {
    return knex('events').insert([
        {
            "name":"test notice",
            "description": "this is test description",
            "backdrop": "this is test backdrop",
            "event_date": "2019-10-29"
        }
    ]);
  };
  