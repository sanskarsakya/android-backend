// const faker = require('faker');

// const createFakeData = () => ({
//   first_name: faker.name.firstName(),
//   last_name : faker.name.lastName(),
//   email     : faker.internet.email(),
//   password  : faker.internet.password(),
//   contact_no: faker.phone.phoneNumber(),
//   address   : faker.address.streetAddress(),
//   gender    : Math.floor(Math.random() * (2 - 1)) + 1,
//   avatar    : faker.image.avatar(),
//   year      : 2020,
//   school_id : 1,
// });

exports.seed = function (knex) {

  // const fakeData = [];
  // const desiredFakeData = 10;

  // for (let index = 0; index < desiredFakeData; index++) {
  //   fakeData.push(createFakeData());

  // }
  return knex('teachers').insert([
    {
      "id"         : 1,
      "first_name" : "Alexander",
      "last_name"  : "Feil",
      "email"      : "Clement.Stoltenberg26@gmail.com",
      "password"   : "uEvhk4sUe6m4T0Y",
      "contact_no" : "407-918-6015 x43696",
      "address"    : "6916 Little Brook",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/anjhero\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 2,
      "first_name" : "Reina",
      "last_name"  : "Trantow",
      "email"      : "Sharon.Russel@hotmail.com",
      "password"   : "v2Av6DiICIk9yOx",
      "contact_no" : "1-402-574-3681",
      "address"    : "291 Harvey Heights",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/vigobronx\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 3,
      "first_name" : "Braden",
      "last_name"  : "McClure",
      "email"      : "Cecelia.Wuckert@hotmail.com",
      "password"   : "gMl_3AUHLgLC7er",
      "contact_no" : "(042) 032-0406 x1136",
      "address"    : "507 Herzog Highway",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/dactrtr\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 4,
      "first_name" : "Fiona",
      "last_name"  : "Emmerich",
      "email"      : "Catharine.Bernhard@gmail.com",
      "password"   : "25TjJERHhM1brBD",
      "contact_no" : "(216) 594-2648 x85721",
      "address"    : "6029 Noemie Centers",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/judzhin_miles\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 5,
      "first_name" : "Chris",
      "last_name"  : "Vandervort",
      "email"      : "Isom.Marvin@hotmail.com",
      "password"   : "gOsqOiyf8wJPloY",
      "contact_no" : "1-982-882-0683",
      "address"    : "411 Barry Road",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/sunlandictwin\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 6,
      "first_name" : "Lauren",
      "last_name"  : "Glover",
      "email"      : "Garrick.Davis@hotmail.com",
      "password"   : "FBfCTZArt9PwF9T",
      "contact_no" : "959.426.0197 x034",
      "address"    : "033 Nathanael Viaduct",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/chrisslowik\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 7,
      "first_name" : "Cara",
      "last_name"  : "Heaney",
      "email"      : "Lavada_Heidenreich28@gmail.com",
      "password"   : "RCjRicwNFvXSiRa",
      "contact_no" : "(865) 445-5708 x282",
      "address"    : "1501 Parker Crossing",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/devankoshal\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 8,
      "first_name" : "Domenica",
      "last_name"  : "Weimann",
      "email"      : "Eliezer.Schamberger2@yahoo.com",
      "password"   : "P407gSsAeNWfZbK",
      "contact_no" : "1-657-053-9374 x23217",
      "address"    : "869 Theron Point",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/dixchen\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 9,
      "first_name" : "Madaline",
      "last_name"  : "Tromp",
      "email"      : "Fernando63@hotmail.com",
      "password"   : "W1hiMHHukRDtm_K",
      "contact_no" : "1-940-833-3121",
      "address"    : "96083 Bosco Fall",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/jeremyworboys\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    },
    {
      "id"         : 10,
      "first_name" : "Claude",
      "last_name"  : "Bruen",
      "email"      : "Laisha_Swaniawski@hotmail.com",
      "password"   : "qxD9SfIk6bYKYtz",
      "contact_no" : "1-879-481-8993 x80874",
      "address"    : "18975 Hauck Alley",
      "gender"     : 1,
      "avatar"     : "https:\/\/s3.amazonaws.com\/uifaces\/faces\/twitter\/donjain\/128.jpg",
      "year"       : 2020,
      "school_id"  : 1
    }
  ]
  );
};
