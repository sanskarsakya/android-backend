
exports.seed = function (knex) {
  return knex('payments').insert([
    {
      "id"           : 1,
      "student_id": 1,
      "invoice_id"   : 1,
      "amount"       : 2000,
      "total"        : 2000,
      "is_debit"     : false,
    },
    {
      "id"           : 2,
      "student_id": 1,
      "invoice_id"   : 1,
      "amount"       : 1000,
      "total"        : 1000,
      "is_debit"     : true,
    }
  ]);
};
