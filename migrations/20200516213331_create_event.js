
exports.up = function(knex) {
    return knex.schema.createTable('events', (table) => {
        table.increments('id').unsigned().primary();
        table.string('name').notNull();
        table.text('backdrop').notNull();
        table.string('description');
        table.date('event_date');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
        table.integer('year');
        table.integer('school_id').unsigned().references('schools.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};
