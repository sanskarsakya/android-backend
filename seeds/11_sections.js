

exports.seed = function (knex) {
  return knex('sections').insert([
    {
      "id": 1,
      "name": "A",
      "class_id": 1,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id": 1
    },
    {
      "id": 2,
      "name": "B",
      "class_id": 1,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id": 1
    },
    {
      "id": 3,
      "name": "C",
      "class_id": 1,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id": 1
    }
  ]);
};
