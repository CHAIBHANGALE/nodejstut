const mongoose = require('mongoose');
const validator =require('validator')
const jwt =require('jsonwebtoken');
const bcrypt=require('bcrypt-nodejs')

var UserSchema= new mongoose.Schema({

    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator :validator.isEmail,
            message:'{VALUE} is not a valid email'
        }
    },

    password: {
        type:String,
        required:true,
        minlength:6,
    },

    tokens:[{
         access:{
            type:String,
            required:true
         },
         token:{
            type:String,
            required:true
         }
    }]

});

UserSchema.methods.generateAuthToken= function(){

    var user= this;
    var access= 'auth';
    var token =jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();

    // console.log("Access",access);
    // console.log("Token",token);

    user.tokens=user.tokens.concat([{
        access,token
    }]);

    console.log("Access:",user.tokens.access);

    return user.save().then(()=>{
        return token;
    });
    
};

UserSchema.methods.removeToken=function(token){

    //$pull lets you remove items from an array that matched a certain criteria 
    var user=this;

    return user.update({
        
        $pull:{
            tokens:{
                token:token
            }
        }

    });
};

UserSchema.statics.findByToken=function(token){

    var User=this;
    var decoded;
    try{
        decoded=jwt.verify(token,'abc123');
    }catch(e){
        return new Promise((resolve,reject)=>{
            reject();
        });
    }
    
    return User.findOne({
        _id:decoded._id,
        'tokens.token':token,
        'tokens.access':'auth'
    });

};


UserSchema.statics.findByCredentials=function(email,password){

    var User=this;
    var tokenglobal;
    var userglobal;
    User.findOne({email}).then((user)=>{

        if(!User){
            return Promise.reject();
        }

        return new Promise(function(resolve,reject){

            bcrypt.compare(password,user.password,function(error,response){

                if(response){
                    resolve(user);
                    console.log('================Resolved==================');
                }
                else{
                    reject();
                    console.log('================Rejected==================');
                }

            });
        }).then(function(user){
            user.generateAuthToken().then(function(token){
            this.tokenglobal=token;
             
        });
    });

});

    var customuser={token:tokenglobal,user:userglobal};
    console.log("Customuser  ",customuser);
    return customuser;
};


//If you dont complete the method program can crash.

UserSchema.pre('save',function(next){

    var user=this;
    if(user.isModified('password')){

        bcrypt.genSalt(10,(error,salt)=>{

            bcrypt.hash(user.password,salt,undefined,(error,hash)=>{
                user.password = hash;
                next();
            });

        });
    }
    else{
        next();
    }

});

var User = mongoose.model('User',UserSchema );

module.exports = { User };