const mongoose = require('mongoose');
const applicationSchema = new mongoose.Schema({
    resume:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    job_id:{
        type: String,
        required: true
    },
    alum_id:{
        type: String,
        required: true
    },
    approval_status: {
        type: String,
        default: "not approved"
    }
});
const applicationData = mongoose.model('Applications',applicationSchema);
module.exports = applicationData;