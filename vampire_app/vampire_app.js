require('./populateVampires');
const mongoose = require('mongoose');
const connectionString = ('mongodb://localhost/test')

mongoose.connect(connectionString); //connecting this file with mongo db
mongoose.connection.on('connected', ()=>{
    console.log(`mongoose connected to ${connectionString}`)
})
mongoose.connection.on('disconnected', ()=>{
    console.log(`mongoose disconnected`)
})
mongoose.connection.on('error', (err)=>{
    console.log(err, `mongoose error`)
})