const {mongoose}=require('./db/mongoose');
const {Todo}=require('./models/todo');
const {User} =require('./models/user');
const express=require('express');
const bodyParser=require('body-parser');

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

// app.post('/todos',(request,response)=>{

//     var todo=new Todo({
//         text:request.body.text
//     });

//     todo.save().then((doc)=>{

//         response.send(doc);

//     },(error)=>{
//         response.status(400).send(error);
        
//     });

//     //middleware we need to give to express
//     console.log(request.body);

// });



app.get('/todos',(request,response)=>{


    Todo.find().then((todos)=>{

        response.send({todos});

    },(error)=>{
        response.status(400).send(error);
    });
  
    // console.log(request.body);

});



app.listen(3000,()=>{
    console.log('Server Started on Port 3000');
});