
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    return knex('enrollment_services').del();
  })
    .then(function () {
      return knex('clasz_services').del();
    })
    .then(function () {
      return knex('payments').del();
    })
    .then(function () {
      return knex('invoices').del();
    })
    .then(function () {
      return knex('services').del();
    })
    .then(function () {
      return knex('marks').del();
    })
    .then(function () {
      return knex('exams').del();
    })
    .then(function () {
      return knex('enrollments').del();
    })
    .then(function () {
      return knex('attendances').del();
    })
    .then(function () {
      return knex('students').del();
    })
    .then(function () {
      return knex('class_routines').del();
    })
    .then(function () {
      return knex('subjects').del();
    })
    .then(function () {
      return knex('sections').del();
    })
    .then(function () {
      return knex('classes').del();
    })
    .then(function () {
      return knex('teachers').del();
    })
    .then(function () {
      return knex('parents').del();
    })
    .then(function () {
      return knex('events').del();
    })
    .then(function () {
      return knex('notices').del();
    })
    .then(function () {
      return knex('schools').del();
    })
};
