
exports.up = function(knex) {
    return knex.schema.createTable('jobs', (table) => {
        table.increments('id').unsigned().primary();
        table.string('title');
        table.text('description');
        table.integer('created_by').unsigned().references('users.id');
        table.integer('applicant_count');
        table.integer('view_count');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('jobs');
};
