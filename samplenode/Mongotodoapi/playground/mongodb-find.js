const { MongoClient,ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/sample', (error, client) => {

    if (error) {
        return console.log('Unable to connect to Database');
    }

    console.log('Connected to MongoDbServer');

    const db= client.db('sample');
    db.collection('Todos').find({_id:new ObjectID("5bb6f472c6bc106181e3bf82")}).toArray().then((docs)=>{

        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));

    },(error)=>{

        console.log('Unable to fetch todos',error);
        
    });

    client.close();


});
