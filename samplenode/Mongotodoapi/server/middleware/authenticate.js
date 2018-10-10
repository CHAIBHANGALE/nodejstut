const {User}= require('./../models/user');


var authenticate =(request,response,next)=>{

    var token=request.header('x-auth');
    // console.log(token);
    User.findByToken(token).then((user)=>{
        console.log(user);
        if(!user){
            return Promise.reject();
        }
       
        request.user=user;
        request.token=token;
        next();
    }).catch((e)=>{
        response.status(401).send();
    });

}   


module.exports={authenticate};