//comment
let names = 'Hepzibha';
let firstName = 'Sundar';

const interestRate = 0.3;
// interestRate = 1, we cannot change the constant value.

console.log(names);
console.log(firstName);
console.log("Hello World");
console.log(interestRate);

/* primitive data type / value
Reference data type
let name ='Hepzibha';  //String value
let age = 30; //Number value
let isApproved = false; //Boolean literal
let firstName = undefined;
let lastName = null;
let selectedColour = nul; //clear the value 

Object, bracket notation and the dot notation

let person = {
    name: 'Hepzibha';
    age: 30;
};

dot notation
person.name ='John';

bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);
*/
//Array
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[1]);


var array = [1,2,3,4,5];

for (var i = 0; i < array.length; i++) {
    var sum = sum + 1;
    sum = array[i];
    console.log(sum);
}

console.log(sum);

// functon

function greet() {
    console.log('I am inside the function');
}
greet();

// passing parameter
/*
function greet(name) {
    console.log('Hello' + name);
}
greet('Hepzibha!  You passed the parameter');
*/
//performing a task

// function parameters - arguments
function sum() {
    console.log(arguments);
}
sum(1,2,3);