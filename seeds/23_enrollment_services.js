
exports.seed = function (knex) {
  return knex('enrollment_services').insert([
    {
      "id"           : 1,
      "enrollment_id": 1,
      "student_id"   : 1,
      "service_id"   : 1,
      "school_id"    : 1
    },
    {
      "id"           : 2,
      "enrollment_id": 1,
      "student_id"      : 1,
      "service_id"   : 2,
      "school_id"    : 1
    },
    {
      "id"           : 3,
      "enrollment_id": 2,
      "student_id"   : 2,
      "service_id"   : 1,
      "school_id"    : 1
    },
    {
      "id"           : 4,
      "enrollment_id": 2,
      "student_id"   : 2,
      "service_id"   : 2,
      "school_id"    : 1
    },
    {
      "id"           : 5,
      "enrollment_id": 3,
      "student_id"   : 3,
      "service_id"   : 1,
      "school_id"    : 1
    },
    {
      "id"           : 6,
      "enrollment_id": 2,
      "student_id"   : 2,
      "service_id"   : 2,
      "school_id"    : 1
    }
  ]);
};
