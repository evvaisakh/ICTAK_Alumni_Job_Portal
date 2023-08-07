const mongoose = require('mongoose');
const employerSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true 
    },
    email:{
        type: String, 
        required: true 
    },
    phone:{
        type: String, 
        required: true 
    },
    company:{
        type: String, 
        required: true 
    },
    password:{
        type: String, 
        required: true 
    },
    designation:{
        type: String, 
        required: true 
    }, 
    usertype:{
        type:String,
        default:"employer"
    },
    approval_status:{
        type: String,
        default: "not approved"
    }
});

const employerData = mongoose.model('Employer_Details',employerSchema)
module.exports = employerData;