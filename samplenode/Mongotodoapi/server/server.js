const {mongoose}=require('./db/mongoose');
const {Todo}=require('./models/todo');
const {User} =require('./models/user');
const express=require('express');
const bodyParser=require('body-parser');
const {ObjectID} =require('mongodb');
const _ =require('lodash');
const {authenticate}=require('./middleware/authenticate');

var app=express();

//Save data into database using mongoose.

// var newTodo=new Todo({
//     text:'automotive',
//     completed:true,
//     completedAt:33
// });

// newTodo.save().then((response)=>{

//     console.log('Save Todo',response);

// },(error)=>{
//     console.log('Unable to save Todo',error);
// });


//middleware we need to give to express
app.use(bodyParser.json({useNewUrlParser:true}));

app.post('/todos',(request,response)=>{

    var todo=new Todo({
        text:request.body.text
    });

    todo.save().then((doc)=>{

        response.send(doc);

    },(error)=>{
        response.status(400).send(error);
        
    });

    //middleware we need to give to express
    console.log(request.body);

});



app.get('/todos',(request,response)=>{


    Todo.find().then((todos)=>{

        response.send({todos});

    },(error)=>{
        response.status(400).send(error);
    });
  
    // console.log(request.body);

});

//Getting Id using GET method URL
app.get('/todos:id',(request,response)=>{

    var id=request.params.id;

    if(!ObjectID.isValid()){
        response.status(400).send(e);
    }
    response.send(request.params.id);
},(e)=>{
    response.status(400).send(e);
});


//Patch is used when you want to update todo items
app.patch('todos/:id',(request,response)=>{
    var id=request.params.id;
    var body =_.pick(request.body,['text','completed']);
})

//Post for Sign Up /users

app.post('/users',(request,response)=>{

    var body = _.pick(request.body,['email','password']);
    var user = new User(body);

    user.save().then(()=>{
        //var auth=user.generateAuthToken();
        
        return user.generateAuthToken();
        
    }).then((token)=>{
        console.log('Auth :',token);
        response.header('x-auth',token).send(user);
       
    }).catch((e)=>{
       response.status(400).send(e);
    });

});



app.get('/users/me',authenticate,(request,response)=>{

    response.send(request.user);
});

//POST /users/login {email,password}

app.post('/users/login',(request,response)=>{

    var body = _.pick(request.body,['email','password']);
   // console.log(User.findByCredentials(body.email,body.password));
    var tokenuser =User.findByCredentials(body.email,body.password);
    console.log('Token :',tokenuser.token,tokenuser.user);
    console.log('Token :',tokenuser['token'],tokenuser['user']);
    response.header('x-auth',tokenuser['token']).send(tokenuser.user);
    }
);
// ).catch((e)=>{
//     response.status(400).send();
// });
// });




//Delete a token during signout
//Here authenticate is a middleware defined in another file
app.delete('/users/me/token',authenticate,(request,response)=>{

    request.user.removeToken(request.token).then(()=>{
        response.status(200).send(); 
    },()=>{
        response.status(400).send();
    });
})


app.listen(3000,()=>{
    console.log('Server Started on Port 3000');
});