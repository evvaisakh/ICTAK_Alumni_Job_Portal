const mongoose = require('mongoose');
const alumniSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    courses:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    placement:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    }
});
const alumniData= mongoose.model('Alumnidata',alumniSchema);
module.exports = alumniData;