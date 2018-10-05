
var asyncAdd=(a,b)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof(a)==='number' && typeof(b)==='number'){
                resolve(a+b);
            }
            else{
                reject('Arguements must be numbers');
            }
        },1500);
    });
};

asyncAdd(5,'7').then((result)=>{
    console.log('Result:',result);
    return asyncAdd(result,33);
}).then((result)=>{
    console.log('Result:',result);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});


// var somePromise = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         reject('Error cannot fulfill promise');
//         resolve('it works');
//     },2500);
    


// });

// somePromise.then((message)=>{

//     console.log("Success",message);

// },(errorMessage)=>{

//     console.log("Error :" ,errorMessage);

// });



