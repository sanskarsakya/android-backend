
exports.up = function (knex, Promise) {
    return knex.schema.createTable('marks', (table) => {
        table.increments('id').unsigned().primary();
        table.integer('student_id').unsigned().references('students.id');
        table.integer('section_id').unsigned().references('sections.id');
        table.integer('subject_id').unsigned().references('subjects.id');
        table.integer('class_id').unsigned().references('classes.id');
        table.integer('exam_id').unsigned().references('exams.id');
        table.decimal('mark_obtained_theory', 8, 2);
        table.decimal('mark_obtained_practical', 8, 2);
        table.decimal('mark_total', 8, 2);
        table.text('comment');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
        table.integer('year');
        table.integer('school_id').unsigned().references('schools.id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('marks');
};
