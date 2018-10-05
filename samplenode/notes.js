console.log('Starting notes.js');

// module.exports.age=21;

// module.exports.addNote=function(){
//     console.log('Add note');
//     return 'newNote';
// }


var addNote= (title,body)=>{

    console.log('Title: ',title ,'Body :',body);
    console.log('Adding Note',title,body);

};

var getAll=()=>{

    console.log('Getting all Nodes');

}

module.exports={

    addNote,
    getAll

};