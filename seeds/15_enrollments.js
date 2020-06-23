
exports.seed = function (knex) {
  return knex('enrollments').insert([
      {
        "id": 1,
        "enroll_code": "enroll_1",
        "student_id": 1,
        "class_id": 1,
        "section_id": 1,
        "year": 2020,
        "school_id": 1
      },
      {
        "id": 2,
        "enroll_code": "enroll_1",
        "student_id": 2,
        "class_id": 1,
        "section_id": 1,
        "year": 2020,
        "school_id": 1
      },
      {
        "id": 3,
        "enroll_code": "enroll_1",
        "student_id": 3,
        "class_id": 1,
        "section_id": 1,
        "year": 2020,
        "school_id": 1
      },
      {
        "id": 4,
        "enroll_code": "enroll_1",
        "student_id": 4,
        "class_id": 1,
        "section_id": 1,
        "year": 2020,
        "school_id": 1
      },
      {
        "id": 5,
        "enroll_code": "enroll_1",
        "student_id": 5,
        "class_id": 1,
        "section_id": 1,
        "year": 2020,
        "school_id": 1
      }
    ]);
};
