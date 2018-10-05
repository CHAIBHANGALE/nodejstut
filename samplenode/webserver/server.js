const express=require('express');
const hbs=require('hbs');


var app=express();

app.set('view engine','hbs');
app.use(express.static(__dirname+'/webpage'));

app.get('/',(request,response)=>{

    response.send('hello Express');

});



app.get('/about',(request,response)=>{

        
    response.send('hello about');

});

app.listen(3000,()=>{
    console.log('Server up on Port 3000');
});

