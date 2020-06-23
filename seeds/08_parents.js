// const faker = require('faker');

// const createFakeParent = () => ({
//   first_name: faker.name.firstName(),
//   last_name : faker.name.lastName(),
//   email     : faker.internet.email(),
//   password  : faker.internet.password(),
//   contact_no: faker.phone.phoneNumber(),
//   address   : faker.address.streetAddress(),
//   profession: faker.name.jobTitle(),
//   school_id : 1,
// });

exports.seed = function (knex) {

  // const fakeData = [];
  // const desiredFakeData = 10;

  // for (let index = 0; index < desiredFakeData; index++) {
  //   fakeData.push(createFakeParent());

  // }
  return knex('parents').insert([
    {
      "id"         : 1,
      "first_name" : "Jan",
      "last_name"  : "Rolfson",
      "email"      : "Nick_Upton@yahoo.com",
      "password"   : "Y4zkyRa3exzoWUO",
      "contact_no" : "1-392-832-7296",
      "address"    : "225 Champlin Field",
      "profession" : "International Mobility Designer",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 2,
      "first_name" : "Tina",
      "last_name"  : "Eichmann",
      "email"      : "Britney88@hotmail.com",
      "password"   : "2v9kW3H_t5njJ4k",
      "contact_no" : "291-239-7569",
      "address"    : "13542 Abdul Common",
      "profession" : "Principal Implementation Designer",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 3,
      "first_name" : "Sophia",
      "last_name"  : "Ledner",
      "email"      : "Nicolette_Muller27@yahoo.com",
      "password"   : "WgabFe1rWjBCQxi",
      "contact_no" : "1-539-585-2421",
      "address"    : "70080 Schaden Unions",
      "profession" : "Lead Functionality Strategist",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 4,
      "first_name" : "Jayme",
      "last_name"  : "Halvorson",
      "email"      : "Estel1@gmail.com",
      "password"   : "ao3fFphjY8NRqnA",
      "contact_no" : "1-450-181-5655 x6717",
      "address"    : "2839 Ankunding Dam",
      "profession" : "Investor Functionality Engineer",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 5,
      "first_name" : "Duane",
      "last_name"  : "Bins",
      "email"      : "Karl_Fadel@gmail.com",
      "password"   : "4wSf5tUD42CKeTt",
      "contact_no" : "1-403-252-1026 x0168",
      "address"    : "1747 Korey Creek",
      "profession" : "National Paradigm Representative",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 6,
      "first_name" : "Haley",
      "last_name"  : "Johnson",
      "email"      : "Regan_Schneider@hotmail.com",
      "password"   : "tnAlq3z_4nx2zXx",
      "contact_no" : "429.118.1730 x003",
      "address"    : "642 Nitzsche Ville",
      "profession" : "Dynamic Integration Representative",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 7,
      "first_name" : "Marietta",
      "last_name"  : "Weimann",
      "email"      : "Alexandre_DAmore91@hotmail.com",
      "password"   : "fcG8QzG2ggoyKDE",
      "contact_no" : "1-000-424-2913",
      "address"    : "8676 Alexandrine Meadow",
      "profession" : "International Branding Producer",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 8,
      "first_name" : "Kolby",
      "last_name"  : "Little",
      "email"      : "Marilie_Hansen@yahoo.com",
      "password"   : "qrjgbXNoiv93FYG",
      "contact_no" : "1-390-281-9042",
      "address"    : "0731 Bartell Spring",
      "profession" : "National Factors Coordinator",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 9,
      "first_name" : "Frieda",
      "last_name"  : "Hickle",
      "email"      : "Marianna69@yahoo.com",
      "password"   : "stAS5KF7Q3rGwWP",
      "contact_no" : "691.893.4349 x653",
      "address"    : "852 Sanford Passage",
      "profession" : "Internal Web Representative",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 10,
      "first_name" : "Trycia",
      "last_name"  : "Beer",
      "email"      : "Camilla_Hermann@gmail.com",
      "password"   : "1ELOyNbzRxYAQnZ",
      "contact_no" : "478-996-2013 x517",
      "address"    : "481 Lehner Creek",
      "profession" : "Chief Marketing Agent",
      "year"       : 2020,
      "school_id"  : 1
    }
  ]);
};
