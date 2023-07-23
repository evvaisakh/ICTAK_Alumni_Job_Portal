const mongoose = require('mongoose');

require ('dotenv').config();
const mongodb_url = process.env.mongodb_url;

mongoose.connect(mongodb_url)
.then(()=>{
    console.log('Connected to Database established');
})
.catch((error)=>{
    console.log(`Error in connecting to Database ${error.message}`)
})