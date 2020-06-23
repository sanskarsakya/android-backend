
exports.seed = function (knex) {
  return knex('invoices').insert([
    {
      "id"           : 1,
      "student_id": 1,
      "amount"       : 10,
      "month"        : 2,
      "year"         : 2020,
      "school_id"    : 1,
      
    }
  ]);
};
