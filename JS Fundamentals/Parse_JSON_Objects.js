let string = '{"name":"Gosho","age":10,"date":"19/06/2005"}';
let string2 = '{"name":"Tosho","age":11,"date":"04/04/2005"}';

let object = JSON.parse(string);
let object2 = JSON.parse(string2);

console.log('Name: ' + object.name);
console.log('Age: ' + object.age);
console.log('Date: ' + object.date);


console.log('Name: ' + object2.name);
console.log('Age: ' + object2.age);
console.log('Date: ' + object2.date);
