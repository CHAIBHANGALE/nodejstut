var sampleobject={
    name:'Chaitanya'
};

var stringjson=JSON.stringify(sampleobject);

console.log(typeof(stringjson));

console.log(stringjson);

var personString='{"name":"Chaitanya","age":21}';

var person= JSON.parse(personString);

console.log(typeof(person));
console.log(person.name,person.age);