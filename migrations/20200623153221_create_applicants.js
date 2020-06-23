
exports.up = function(knex) {
    return knex.schema.createTable('applicants', (table) => {
        table.increments('id').unsigned().primary();
        table.integer('job_id').unsigned().references('jobs.id');
        table.integer('user_id').unsigned().references('users.id');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('applicants');
};
