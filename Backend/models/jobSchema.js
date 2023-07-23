const mongoose = require('mongoose');
const jobSchema = mongoose.Schema({
    jobid:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
        required:true
    },
    jobtitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    }
});
const jobModel = mongoose.model('Jobdetails',jobSchema);
module.exports = jobModel;