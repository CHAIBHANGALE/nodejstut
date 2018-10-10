const {mongoose}=require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} =require('mongodb');

var id = '5bb731269c651a76744488ae';

Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos :'+todos);
});

if(!ObjectID.isValid()){
    console.log('ID not Valid');
}


Todo.findone({
    _id:id
}).then((todo)=>{
    console.log('Todo :'+ todo);
});

Todo.findById(id).then((todoid)=>{

    if(!todoid){
        console.log('Todo not Found');
    }

    console.log('TodoId '+todoid);
}).catch((e)=>{
    console.log(e);
});