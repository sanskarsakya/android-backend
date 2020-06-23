
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', (table) => {
        table.increments('id').unsigned().primary();
        table.string('first_name').notNull();
        table.string('last_name');
        table.string('email');
        table.text('password');
        table.date('dob');
        table.integer('parent_id').unsigned().references('parents.id');
        table.integer('gender');
        table.string('address');
        table.string('contact_no');
        table.text('avatar');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
        table.integer('year');
        table.integer('school_id').unsigned().references('schools.id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('students');
};
