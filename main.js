//console.error('This is an error');
//console.warn('This is a warning');

// var, let, const... var is globally scoped
// usually just use let or const.. block level scope
//let will let you reassign values
//const is constant
//let age = 30;
//const age = 30;
//age =31;
//console.log(age);

//primitive data types... Strings, Numbers, Boolean, null, undefined, Symbol
//Symbol is in ES6
//double or sing quotes ang Strings
//semicolons are optional
//number no quotes
//null empty
/*const name = "Jeman Mama";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // z is undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
*/
//Further into String
/*const name = 'Jeman';
const age = 30;
//concatenation
console.log('My name is '+name+' and my age is '+age);
// Template string
const hello = 'My name is ${name} and I am ${age}';
console.log(hello);*/
/*
const s = 'Hello World!';
const f = 'technology, computer, it, code';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(' '));
console.log(f.split(', '))*/

//Arrays - variables that hold multiple values
//constructor is new something()
/*
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples','oranges','pears',10, true];
fruits[5] = 'grapes'
fruits.push('Jeman');
fruits.push(true);

fruits.unshift('strawberries');//to put on the start

console.log(fruits);
fruits.pop();
console.log(fruits);
*/
/*
const person = {
    firstName: 'Jeman',
    lastName: 'Mama',
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.age);

const { firstName, lastName} = person;//pulls firstName and lastName out of person
console.log(firstName);                 //so that we can use them


const{address: {city}} = person; //syntax for getting the inner something
console.log(city)

person.email = 'john@gmail.com';
console.log(person); 
*/
/*
const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentis appt',
        isCompleted: false
    }
];

//console.log(todos[1].text);

//JSON is a data format
//sending data to a server is usually in a json format
//Converting to JSON

//const todoJSON = JSON.stringify(todos); //converts to JSON
//console.log(todoJSON);
/*
//For loops
for(let i = 0; i < todos.length; i++){
    console.log(todos[i]);
}
//While
let i = 0;
while(i < todos.length){
    console.log(todos[i]);
    i++;
}*/

//Looping through arrays(ONE WAY)
/*for(let todo of todos){ //for(int i : array)
    console.log(todo.id);
}*/

//forEach, map, filter
/*
todos.forEach(function(todo){
    console.log(todo.text);
})
const todoText = todos.map(function(todo){ //creates an array
    return todo.text;
})

const todoFilter = todos.filter(function(todo){ //filters the array
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoFilter);
*/

//conditionals
/*
const x = '10';
if(x == 10){ //still true even if x = '10'..String
    console.log("double equal")
}
else{
    
}
if(x === 10){//also matches the data type
    console.log("triple equal")
} else{
    console.log('not the same type');
}
*/
/*const x = 6;
const y = 11;

if(x>5 && y>10){
    console.log('x is more than 5 or y is more than 10');
} else{
    console.log('x is not more than 5 or y is not more than 10');
}
*/

/*const x = 2;
const color = x > 10 ? 'red' : 'blue' //if x > 10 then red else blue

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}*/

/*function addNums(num1 = 1, num2=1){//'equal means default values'
    return num1+num2;
}
*/
//same as the above function
//const addNums = (num1 = 1, num2 = 2) => num1 + 5;

// you can even make it smaller if there is only one variable
/*const addNums = num1 => num1+5;
console.log(addNums(1));
*/
//OOP
// constructors for objects are started with capital
/*function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);//date constructor 
}


//Instantiating an object

const person1 = new Person('Jeman','Mama','2-10-1999')

console.log(person1);

//prototype.. put in the prototype the functions because we might not need this
//so that the methods do not get shown on the console.log('');
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear;
}
Person.prototype.getBirthYear = function(){
    return this.firstName + ' ' + this.lastName;
}
*/
//ES6 classes prettier way. already in prototype the methods
/*class Person {
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);//date constructor 
    }
    getBirthYear(){
        return this.dob.getFullYear;
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = new Person('Jeman','Mama','2-10-1999')

console.log(person1);*/

 