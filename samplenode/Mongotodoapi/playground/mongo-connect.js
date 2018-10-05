const { MongoClient } = require('mongodb');

// Variable Destructuring.

var user = { name: 'sample', age: 23 };

var { name } = user;

MongoClient.connect('mongodb://localhost:27017/sample', (error, client) => {

    if (error) {
        return console.log('Unable to connect to Database');
    }

    console.log('Connected to MongoDbServer');


    const db=client.db('sample');
    db.collection('Todos').insertOne({
        text:'something todo',
        completed:true
    },(error,result)=>{

        if(error){
            console.log('Unable to insert todo',error);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));

    });

    client.close();


});