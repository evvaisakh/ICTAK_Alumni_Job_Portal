const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name Is Require']
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:[true,'Email Is Require'],
        unique:true,
        validate:validator.isEmail,
    },
    phone:{
        type:String,
        required:[true,'Number Is Require']
    },
    password:{
        type:String,
        required:[true,'Password Is Require']
    }
},
{timestamps:true});

const formSchema = mongoose.Schema({
    qualify:{
        type:String,
        required:[true,'Highest Qualification Is Require']
    },
    course:{
        type:String,
        required:[true,'Course studied at ICTAK Is Require'],
        enum:['FSD','DSA','ML-AI','RPA','ST','CSA']
    },
    batch:{
        type:String,
        required:[true,'Batch Details Is Require'],
        enum:['KKEM','NORKA','KDISC']
    },
    placement:{
        type:String,
        require:[true,'Placement Status Is Require'],
        enum:['Placed','Job-Seeking']
    },
    company:{
        type:String
    }
},
{timestamps:true});  

const jobSchema = mongoose.Schema({
    jobId:{
        type:String,
        required:[true,'Job Id Is Require']
    },
    jobTitle:{
        type:String,
        required:[true,'Job Name Is Require']
    },
    jobDescription:{
        type:String,
        required:[true,'Description Is Require']
    },
    jobExperience:{
        type:String,
    },
    jobLocation:{
        type:String,
        required:[true,'Location Is Require']
    },
    jobSalary:{
        type:String,
    }
})

 
const user = mongoose.model('User',userSchema);
const form = mongoose.model('Form',formSchema);
const jobdetail = mongoose.model('Jobdetail',jobSchema);

module.exports = {user,form,jobdetail};