// 1. Require your node modules
const mongoose = require('mongoose');
const Vamps = require('./populateVampires');
require('./vampire_app')

// const Vamp = require('../test/model-tests')
// const connectionString = ('mongodb://localhost/test')
const Vampire = require('./models/vampire')
// 2. Require your model (and possibly your extra data source);
// Vampire.collection.insertMany(Vamps,() => {
//     console.log(Vamps)
//     mongoose.connection.close();
//   });

// Vampire.create({
//     name: "Penelope",
//     hair_color: "black",
//     eye_color: "brown",
//     dob: new Date(543, 2, 13, 7, 47),
//     loves: ["reading", "history"],
//     location: "London, England",
//     gender: "f",
//     victims: 1000,
//   }, (err, createdVamps)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamps);
//     }
// }),

//   Vampire.create(
//   {
//     name: "Viago",
//     hair_color: "brown",
//     eye_color: "brown",
//     dob: new Date(1748, 2, 13, 7, 47),
//     loves: ["reading", "theater"],
//     location: "Wellington, New Zealand",
//     gender: "f",
//     victims: 156,
//   }, 
//   (err, createdVamps)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamps);
//     }
// }),

//   Vampire.create(
//   {
//     name: "Deacon",
//     hair_color: "brown",
//     eye_color: "brown",
//     dob: new Date(1876, 2, 13, 7, 47),
//     loves: ["partying", "fighting"],
//     location: "Wellington, New Zealand",
//     gender: "m",
//     victims: 1700,
//   }, 
//   (err, createdVamps)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamps);
//     }
// }),

//   Vampire.create(
//   {
//     name: "Piotr",
//     hair_color: "bald",
//     eye_color: "yellow",
//     dob: new Date(5, 2, 13, 7, 47),
//     loves: ["blood", "chickens"],
//     location: "Wellington, New Zealand",
//     gender: "m",
//     victims: 18000,
//   }, 
  
//   (err, createdVamps)=>{
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVamps);
//         }
//     });

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


// Vampire.find({gender: "f"}, (err, foundVampire)=>{
//         if(err){
//                 console.log(err);
//             } else {
//                 //this returns any match the author has an array
//                 console.log(foundVampire);
//             }
//     })


// Vampire.find({victims: {$gt:500} }, (err, foundVampire)=>{
//     if(err){
//             console.log(err);
//         } else {
//             //this returns any match the author has an array
//             console.log(foundVampire);
//         }
// })

// Vampire.find({victims: {$lte:150} }, (err, foundVampire)=>{
//     if(err){
//             console.log(err);
//         } else {
//             //this returns any match the author has an array
//             console.log(foundVampire);
//         }
// })

// Vampire.find({victims: {$ne:210234} }, (err, foundVampire)=>{
//         if(err){
//                 console.log(err);
//             } else {
//                 console.log(foundVampire);
//             }
//     })

// Vampire.find({victims: {$gt:150} && {$lt:500}  }, (err, foundVampire)=>{
//             if(err){
//                     console.log(err);
//                     console.log(foundVampire);
//                 }
//         })

// Vampire.find({title:{$exists:true}}, (err, foundVampire)=>{
//                 if(err){
//                         console.log(err);
//                     } else {
//                         console.log(foundVampire);
//                     }
//             })

// Vampire.find({victims:{$exists:false}}, (err, foundVampire)=>{
//                     if(err){
//                             console.log(err);
//                         } else {
//                             console.log(foundVampire);
//                         }
//                 })

// Vampire.find({$and:[{title:{$exists:true}}, {victims:{$exists:false}}]}, (err, foundVampire)=>{
//                     if(err){
//                             console.log(err);
//                         } else {
//                             console.log(foundVampire);
//                         }
//                 })

// Vampire.find({$and:[{victims:{$gt:1000}}, {victims:{$exists:true}}]}, (err, foundVampire)=>{
//                         if(err){
//                                 console.log(err);
//                             } else {

//                                 console.log(foundVampire);
//                             }
//                     })

// Vampire.find({$or:[{location:"New York, New York, US"}, {location:"New Orleans, Louisiana, US"}]}, (err, foundVampire)=>{
//                         if(err){
//                                 console.log(err);
//                             } else {

//                                 console.log(foundVampire);
//                             }
//                     })

// Vampire.find({$or:[{loves:"brooding"}, {loves:"being tragic"}]}, (err, foundVampire)=>{
//                             if(err){
//                                     console.log(err);
//                                 } else {
    
//                                     console.log(foundVampire);
//                                 }
//                         })

// Vampire.find({$or:[{victims:{$gt:1000}}, {loves:"marshmallow"}]}, (err, foundVampire)=>{
//                             if(err){
//                                     console.log(err);
//                                 } else {
    
//                                     console.log(foundVampire);
//                                 }
//                         })

// Vampire.find({$or:[{hair_color:"red"}, {eye_color:"green"}]}, (err, foundVampire)=>{
//     if(err){
//             console.log(err);
//         } else {

//             console.log(foundVampire);
//         }
// })

// Vampire.find({$or:[{loves:"frilly shirtsleeves"}, {loves:"frilly collars"}]}, (err, foundVampire)=>{
//         if(err){
//                 console.log(err);
//             } else {
    
//                 console.log(foundVampire);
//             }
//     })

// Vampire.find({$or:[{loves:"frilly shirtsleeves"}, {loves:"frilly collars"}]}, (err, foundVampire)=>{
//     if(err){
//             console.log(err);
//         } else {

//             console.log(foundVampire);
//         }
// })

// Vampire.find({loves:"brooding"}, (err, foundVampire)=>{
//     if(err){
//             console.log(err);
//         } else {

//             console.log(foundVampire);
//         }
// })

// Vampire.find({loves:"brooding"}, (err, foundVampire)=>{
//         if(err){
//                 console.log(err);
//             } else {
    
//                 console.log(foundVampire);
//             }
//     })

    Vampire.find({$and: [{loves:"fancy cloaks"}, {loves:{$nin:['top hats', 'virgin blood']}}]}, (err, foundVampire)=>{
        if(err){
                console.log(err);
            } else {
    
                console.log(foundVampire);
            }
    })

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
