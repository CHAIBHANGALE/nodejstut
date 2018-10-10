//JSON WEB TOKEN

const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt-nodejs');

var password='334234fsdfs';

bcrypt.genSalt(10,(error,salt)=>{

    bcrypt.hash(password,salt,undefined,(error,hash)=>{
        console.log(hash);
    });

});


var hashedPassword='$2a$10$cfezpph15N6cIquMguysUOTYkwUZaEfkWQzSuUZcrUme7KLbeCLwm';

bcrypt.compare(password,hashedPassword,(error,response)=>{
    console.log(response);
});


//Using the JWT package to generate Token
/*
var data = {
    id: 10
}

var token=jwt.sign(data,'123abc');

console.log(token);

var decoded=jwt.verify(token,'123abc');
console.log('Decoded',decoded);
*/




/*
    Actual working of jwt jsonwebtoken
*/

// var message='I am Chaitanya';
// var hash= SHA256(message).toString();
// console.log('Message:',message);
// console.log('Hash:',hash);

// var data={
//     id:3
// };

// var token ={
//     data,
//     hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// token.data.id=5;
// token.hash=SHA256(JSON.stringify(token.data)).toString();

// //Salt a Hash 

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if(resultHash===token.hash){
//     console.log('Data was not changed');
// }
// else{
//     console.log('Data was changed Do not trust!');
// }