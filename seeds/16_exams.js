
exports.seed = function (knex) {
  return knex('exams').insert([
    {
      "id": 1,
      "name": "first term",
      "exam_date": "2020-10-29",
      "year": 2020,
      "full_mark_theory": 75,
      "pass_mark_theory": 25,
      "full_mark_practical": 25,
      "pass_mark_practical": 12,
      "school_id": 1
    },
    {
      "id": 2,
      "name": "second term",
      "exam_date": "2020-10-29",
      "full_mark_theory": 75,
      "pass_mark_theory": 25,
      "full_mark_practical": 25,
      "pass_mark_practical": 12,
      "school_id": 1
    },
    {
      "id": 3,
      "name": "third term",
      "exam_date": "2020-10-29",
      "full_mark_theory": 75,
      "pass_mark_theory": 25,
      "full_mark_practical": 25,
      "pass_mark_practical": 12,
      "school_id": 1
    }
  ]);
};
