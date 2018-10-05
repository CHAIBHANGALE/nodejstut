
console.log('start app');

const fs = require('fs');
const os= require('os');
const notes=require('./notes');
const _ = require('lodash')

const yargs=require('yargs');


// var user=os.userInfo();

// console.log(user);

// var result=notes.addNote();

// console.log(result);

// fs.appendFile('greetings.txt',`Hello ${user.username} ! You are ${notes.age}`,function(err){
//     if(err){
//         console.log('Unable to append to file');
//     }
// });


// console.log(_.isString('chaitanya'));
// console.log(_.isString(23123));

// var arr=[1,3,2,3,'chaitanya','chaitanya'];

// console.log(_.uniq(arr));

const argv=yargs.argv;

// console.log('Yargs : ',argv);
// console.log('Process : ',process.argv);

var command=process.argv[2];
console.log('Command :' +command);

if(command==='add'){
    console.log('Adding New Node');
    notes.addNote(argv.title,argv.body);
}


else if(command==='list'){
    console.log('Listing all Nodes');
    notes.getAll();
}

else if(command==='read'){
    console.log('Reading Nodes');
}

else if(command==='remove'){
    console.log('Removing Node');
}

else{
    console.log('Command not recognized');
}