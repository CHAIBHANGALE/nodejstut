const mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
    text:{
        type:String,
        //value must exist
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
    });

    module.exports={Todo};