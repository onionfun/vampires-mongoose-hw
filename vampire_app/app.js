// 1. Require your node modules
const mongoose = require('mongoose');
const Vamps = require('./populateVampires');
require('./vampire_app')

// const Vamp = require('../test/model-tests')
// const connectionString = ('mongodb://localhost/test')
const Vampire = require('./models/vampire')
// 2. Require your model (and possibly your extra data source);
Vampire.collection.insertMany(Vamps,() => {
    console.log(Vamps)
    mongoose.connection.close();
  });
Vampire.create({
    name: "Penelope",
    hair_color: "black",
    eye_color: "brown",
    dob: new Date(543, 2, 13, 7, 47),
    loves: ["reading", "history"],
    location: "London, England",
    gender: "f",
    victims: 1000,
  }, (err, createdVamps)=>{
    if(err){
        console.log(err);
    } else {
        console.log(createdVamps);
    }
}),

  Vampire.create(
  {
    name: "Viago",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1748, 2, 13, 7, 47),
    loves: ["reading", "theater"],
    location: "Wellington, New Zealand",
    gender: "f",
    victims: 156,
  }, 
  (err, createdVamps)=>{
    if(err){
        console.log(err);
    } else {
        console.log(createdVamps);
    }
}),

  Vampire.create(
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
  (err, createdVamps)=>{
    if(err){
        console.log(err);
    } else {
        console.log(createdVamps);
    }
}),

  Vampire.create(
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
// Vamps.find({})
// Article.find({author: "Hemingway"}, (err, foundArticles)=>{
//         if(err){
//                 console.log(err);
//             } else {
//                 //this returns any match the author has an array
//                 console.log(foundArticles);
//             }
//     })



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
