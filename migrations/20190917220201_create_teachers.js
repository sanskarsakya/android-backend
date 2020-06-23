exports.up = function (knex, Promise) {
    return knex.schema.createTable('teachers', (table) => {
        table.increments('id').unsigned().primary();
        table.string('first_name').notNull();
        table.string('last_name');
        table.string('email');
        table.text('password');
        table.string('contact_no');
        table.string('address');
        table.integer('gender');
        table.text('avatar');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
        table.integer('year');
        table.integer('school_id').references('schools.id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('teachers');
};
