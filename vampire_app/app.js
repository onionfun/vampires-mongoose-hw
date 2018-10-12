// 1. Require your node modules
const Vamps = require('./populateVampires');
const mongoose = require('mongoose');
const Vamp = require('../test/model-tests')
const connectionString = ('mongodb://localhost/test')
const vampire = require('./models/vampire')
// 2. Require your model (and possibly your extra data source);

Vamps.create({
    name: "Penelope",
    hair_color: "black",
    eye_color: "brown",
    dob: new Date(543, 2, 13, 7, 47),
    loves: ["reading", "history"],
    location: "London, England",
    gender: "f",
    victims: 1000,
  }, 
  {
    name: "Viago",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1748, 2, 13, 7, 47),
    loves: ["reading", "theater"],
    location: "Wellington, New Zealand",
    gender: "m",
    victims: 156,
  }, 
  {
    name: "Deacon",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1876, 2, 13, 7, 47),
    loves: ["partying", "fighting"],
    location: "Wellington, New Zealand",
    gender: "m",
    victims: 1700,
  }, 
  {
    name: "Piotr",
    hair_color: "bald",
    eye_color: "yellow",
    dob: new Date(5, 2, 13, 7, 47),
    loves: ["blood", "chickens"],
    location: "Wellington, New Zealand",
    gender: "m",
    victims: 18000,
  }, 
  
  (err, createdVamps)=>{
        if(err){
            console.log(err);
        } else {
            console.log(createdVamps);
        }
    });
// 3. Connect your database and collection name

// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
