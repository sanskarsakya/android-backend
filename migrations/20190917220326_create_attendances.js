
exports.up = function (knex, Promise) {
    return knex.schema.createTable('attendances', (table) => {
        table.increments('id').unsigned().primary();
        table.integer('class_id').unsigned().references('classes.id');
        table.integer('section_id').unsigned().references('sections.id');
        table.integer('enrollment_id').unsigned().references('students.id');
        table.boolean('is_present').defaultTo(false);
        table.integer('day');
        table.integer('month');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
        table.integer('year');
        table.integer('school_id').unsigned().references('schools.id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('attendances');
};
