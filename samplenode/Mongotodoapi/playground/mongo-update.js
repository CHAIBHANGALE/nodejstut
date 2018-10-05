const { MongoClient,ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/sample', (error, client) => {

    if (error) {
        return console.log('Unable to connect to Database');
    }

   
    console.log('Connected to MongoDbServer');

    const db=client.db('sample');

    db.collection('Todos').findOneAndUpdate({completed:false},{

        $set:{
            completed:true
        }
    },
    {
        returnOriginal:false
    }

    ).then((result)=>{  

        console.log(result);


    },(error)=>{

        console.log('Error while Updating');

    });


});