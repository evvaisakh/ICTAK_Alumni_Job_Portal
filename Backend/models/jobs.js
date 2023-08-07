const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    jobTitle:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
    jobSector:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    closingDate:{
        type: Date,
        required: true
    },
    skills:{
        type: Array,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    salaryRange:{
        type: String,
        required: true
    },
    postedBy:{
        type: String,
        required: true
    }
});

const jobData = mongoose.model('Job_Data',jobSchema);
module.exports = jobData;