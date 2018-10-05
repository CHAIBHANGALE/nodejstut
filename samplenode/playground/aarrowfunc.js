var square =(x)=>x*x;

var user={
    name:'Chaitanya',

    sayHi:()=>{
        console.log(`Hi ${this.name} `);
    },

    sayHiAlt(){
        console.log(`Hi ${this.name} `);
    }
}
user.sayHiAlt();

//console.log(square(9));
