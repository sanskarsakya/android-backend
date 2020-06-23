exports.up = function (knex, Promise) {
    return knex.schema.createTable('schools', (table) => {
        table.increments('id').unsigned().primary();
        table.string('name').notNull();
        table.string('address');
        table.string('theme');
        table.text('avatar');
        table.string('prefix');
        table.string('language');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('schools');
};
