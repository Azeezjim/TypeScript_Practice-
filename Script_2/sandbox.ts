const character = 'Azeezjim';
console.log(character)

const inputs = document.querySelectorAll('input')

// console.log(inputs) 

inputs.forEach(input => {
  // console.log(input)
})

let myName = "Azeezjim";

myName = "Abdul Azeez"

// let age = 23;

// age = 24;

const circ = (diametar : number) => {
  diametar * Math.PI
}
console.log(circ(5.5))

// leason 4

let names = ['Azeezjim', 'Azeez', 'jim']

names.push ('Garuba')
// names.push (3)

// leason 

let age: number; // age can onlr be a type of number 
age = 30

// we can also specify the data type an arrray or object should have while innitializing them 

let objectName: string[]

objectName = ['Lateefa']

objectName.push('Jamilah')

// union Type 

let  mixed: (string|number)[] =[]

mixed.push(25)
mixed.push("Ibnu Baz")
console.log(mixed)
