const mongoose=require('mongoose');

//mongoose waits for connection till any opration is performed.

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/sample');



module.exports={mongoose};