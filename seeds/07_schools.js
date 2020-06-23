const faker = require('faker');

const createFakeDate = () => ({
  name    : faker.company.companyName(),
  address : faker.address.streetAddress(),
  theme   : Math.floor(Math.random() * (2 - 1)) + 1,
  avatar  : faker.image.avatar(),
  prefix  : 'sch',
  language: 'en',
});

exports.seed = function (knex) {

  // const fakeData        = [];
  // const desiredFakeData = 10;

  // fakeData.push(createFakeDate());
  // for (let index = 0; index < desiredFakeData; index++) {
  //   fakeData.push(createFakeDate());
  // }
  return knex('schools').insert([
    {
      id      : 1,
      name    : 'shahid smarak',
      address : 'kalopool, kathmandu',
      theme   : 1,
      avatar  : 'test',
      prefix  : 'sch',
      language: 'en',
    }
  ]);
};
