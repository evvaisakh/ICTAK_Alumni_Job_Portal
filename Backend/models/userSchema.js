const mongoose=require('mongoose');
const userSchema= mongoose.Schema({
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
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const userData= mongoose.model('Userdata',userSchema);
module.exports = userData;