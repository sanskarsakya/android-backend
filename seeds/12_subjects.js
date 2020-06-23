
exports.seed = function (knex) {
  return knex('subjects').insert([
    {
      "id": 1,
      "name": "Science",
      "class_id": 1,
      "teacher_id": 1,
      "school_id": 1
    },
    {
      "id": 2,
      "name": "Science",
      "class_id": 2,
      "teacher_id": 1,
      "school_id": 1
    },
    {
      "id": 3,
      "name": "Science",
      "class_id": 3,
      "teacher_id": 1,
      "school_id": 1
    },
    {
      "id": 4,
      "name": "Science",
      "class_id": 4,
      "teacher_id": 1,
      "school_id": 1
    },
    {
      "id": 5,
      "name": "Science",
      "class_id": 5,
      "teacher_id": 1,
      "school_id": 1
    },
    {
      "id": 6,
      "name": "Math",
      "class_id": 1,
      "teacher_id": 2,
      "school_id": 1
    },
    {
      "id": 7,
      "name": "Math",
      "class_id": 2,
      "teacher_id": 2,
      "school_id": 1
    },
    {
      "id": 8,
      "name": "Math",
      "class_id": 3,
      "teacher_id": 2,
      "school_id": 1
    },
    {
      "id": 9,
      "name": "Math",
      "class_id": 4,
      "teacher_id": 2,
      "school_id": 1
    },
    {
      "id": 10,
      "name": "Math",
      "class_id": 5,
      "teacher_id": 2,
      "school_id": 1
    },
    {
      "id": 11,
      "name": "English",
      "class_id": 1,
      "teacher_id": 3,
      "school_id": 1
    },
    {
      "id": 12,
      "name": "English",
      "class_id": 2,
      "teacher_id": 3,
      "school_id": 1
    },
    {
      "id": 13,
      "name": "English",
      "class_id": 3,
      "teacher_id": 3,
      "school_id": 1
    },
    {
      "id": 14,
      "name": "English",
      "class_id": 4,
      "teacher_id": 3,
      "school_id": 1
    },
    {
      "id": 15,
      "name": "English",
      "class_id": 5,
      "teacher_id": 3,
      "school_id": 1
    },
    {
      "id": 16,
      "name": "Nepali",
      "class_id": 1,
      "teacher_id": 4,
      "school_id": 1
    },
    {
      "id": 17,
      "name": "Nepali",
      "class_id": 2,
      "teacher_id": 4,
      "school_id": 1
    },
    {
      "id": 18,
      "name": "Nepali",
      "class_id": 3,
      "teacher_id": 4,
      "school_id": 1
    },
    {
      "id": 19,
      "name": "Nepali",
      "class_id": 4,
      "teacher_id": 4,
      "school_id": 1
    },
    {
      "id": 20,
      "name": "Nepali",
      "class_id": 5,
      "teacher_id": 4,
      "school_id": 1
    },
    {
      "id": 21,
      "name": "Social",
      "class_id": 1,
      "teacher_id": 5,
      "school_id": 1
    },
    {
      "id": 22,
      "name": "Social",
      "class_id": 2,
      "teacher_id": 5,
      "school_id": 1
    },
    {
      "id": 23,
      "name": "Social",
      "class_id": 3,
      "teacher_id": 5,
      "school_id": 1
    },
    {
      "id": 24,
      "name": "Social",
      "class_id": 4,
      "teacher_id": 5,
      "school_id": 1
    },
    {
      "id": 25,
      "name": "Social",
      "class_id": 5,
      "teacher_id": 5,
      "school_id": 1
    }
  ]);
};
