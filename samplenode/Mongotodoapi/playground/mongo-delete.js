const { MongoClient,ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/sample', (error, client) => {

    if (error) {
        return console.log('Unable to connect to Database');
    }

    console.log('Connected to MongoDbServer');

    const db= client.db('sample');
    db.collection('Todos').deleteOne({_id:new ObjectID("5bb6fe8e791f1b3164987771")}).then(()=>{
        console.log('Done');
    }


    
    );

    //deleteMany 

    //findOneandDelete =>shows the document and deletes it .


});
