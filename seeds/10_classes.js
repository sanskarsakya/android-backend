
exports.seed = function (knex) {
  return knex('classes').insert([
    {
      "id": 1,
      "class": "One",
      "numeric": 1,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 2,
      "class"     : "Two",
      "numeric"   : 2,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 3,
      "class"     : "Three",
      "numeric"   : 3,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 4,
      "class"     : "Four",
      "numeric"   : 4,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 5,
      "class"     : "Five",
      "numeric"   : 5,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 6,
      "class"     : "Six",
      "numeric"   : 6,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 7,
      "class"     : "Seven",
      "numeric"   : 7,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 8,
      "class"     : "Eight",
      "numeric"   : 8,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 9,
      "class"     : "Nine",
      "numeric"   : 9,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    },
    {
      "id"        : 10,
      "class"     : "Ten",
      "numeric"   : 10,
      "teacher_id": Math.floor(Math.random() * (10 - 1)) + 1,
      "school_id" : 1,
    }
  ]);
};
