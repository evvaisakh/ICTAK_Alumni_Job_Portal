const mongoose = require('mongoose');
const alumniSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true 
    },
   email:{ 
        type: String, 
        required: true 
    },
   phone:{ 
        type: Number, 
        required: true 
    },
    alternate_phone_number:{ 
        type: Number, 
    },
   gender:{ 
        type: String, 
        required: true 
    },
    date_of_birth:{ 
        type: Date, 
        required: true 
    },
    marital_status:{ 
        type: String, 
        required: true 
    },
    permanent_address:{ 
        type: String, 
        required: true 
    },
    pincode:{ 
        type: Number, 
        required: true 
    },
    district:{ 
        type: String, 
        required: true 
    },
    state:{ 
        type: String, 
        required: true 
    },
    country:{ 
        type: String, 
        required: true 
    },
    profile:{ 
        type: String, 
    },
    education :[
        {
            qualification:{
                type: String,
                default: "sample"
            },
            completion_status:{
                type: String,
                default: ""
            },
            main_stream:{
                type: String,
                default: ""
            },
            specialization:{
                type: String,
                default: ""
            },
            university:{
                type: String,
                default: ""
            },
            percentage:{
                type: Number,
                default:  0
            },
            year_of_pass:{
                type: Number,
                default: 0
            }  
        }
    ],
       
    experience :[
        {
            company:{
                type: String,
                default: ""
            },
            designation:{
                type: String,
                default: ""
            },
            presently_working:{
                type: String,
                default: " "
            },
            starting_date:{
                type: Date,
                default: ""
            },
            ending_date:{
                type: Date,
                default: ""
            },
            current_monthly_salary:{
                type: Number,
                default: 0
            },
            notice_period:{
                type: Number,
                default: 0
            },
        } 
    ],
   
    highest_qualification:{
                type: String,
                default: ""
            },
    course_started_at_ictak:{
                type: String,
                default: ""
            },
    batch_details:{
                type: String,
                default: ""
            },
    placement_status:{
                type: String,
                default: ""
            },
    company_name:{
                type: String,
                default: ""
            },
    approval_status:{
        type: String,
        default: "not approved"
    },
    usertype:{
        type:String,
        default:"alumni"
    },
    password:{
        type: String,
        required: true
    }
});

const alumniData = mongoose.model('Alumni_Details',alumniSchema);
module.exports = alumniData;
