"use strict";
const character = 'Azeezjim';
console.log(character);
const inputs = document.querySelectorAll('input');
// console.log(inputs) 
inputs.forEach(input => {
    // console.log(input)
});
let myName = "Azeezjim";
myName = "Abdul Azeez";
// let age = 23;
// age = 24;
const circ = (diametar) => {
    diametar * Math.PI;
};
console.log(circ(5.5));
// leason 4
let names = ['Azeezjim', 'Azeez', 'jim'];
names.push('Garuba');
// names.push (3)
// leason 
let age; // age can onlr be a type of number 
age = 30;
// we can also specify the data type an arrray or object should have while innitializing them 
let objectName;
objectName = ['Lateefa'];
objectName.push('Jamilah');
// union Type for Array
let mixed = [];
mixed.push(25);
mixed.push("Ibnu Baz");
console.log(mixed);
// union Type for varable
let mixedVArables;
mixedVArables = 20;
mixedVArables = 'I am a string';
mixedVArables = true;
// Object Declareation 
let objectNames;
// ANY TYPE  
let value = 40;
value = 'Azeezjim';
console.log(value);
// ANy Array 
let anyArray = [];
anyArray.push(29);
anyArray.push('annay array string');
anyArray.push(true);
console.log(anyArray);
// ANY Object 
let anyObject;
anyObject = {
    name: 23,
    age: "24 years old"
};
console.log(anyObject);
