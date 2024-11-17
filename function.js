// // function is a block of code that perform an action and be be resueable


// // Declaration
// function greet(name) {
//     console.log("Hello," + name);

// }

// greet("Uzi"); // output: Hello Uzi


// function add(a,b,c){
//     return a + b + c;
// }
// const sum = add(4,5,6)
// console.log(sum);

// function multiply(a,b){
//     return a*b;
// }
//     const product =multiply(4,5)
//     console.log(product);

// // write a function 

// // Assignment.
// function result(name,course) {
//     console.log("Hello," + name, "I am a " + course);
// }
// result("Uzi", "fullstack")


// //Practice.

// function add(a,b,c){
//     return a+b+c
// }
// const plus = add(3,4,6)
// console.log(plus);

// // function expression
// const functionName = function(parameters){
//     //code to be excuted

// };

// const hello = function(name){
//     console.log("Hello," + name);

// };
// hello("John"); //Output; Hello,John

// function expressiong is a to assign a variable





// a loop is a programming cnstruct used to repeat a block of code multiple 
// times until a specific condition is net .loop help autmate repetitive task 

//for loop : the loop is ideal when u know in advance how many time u want to 
// repeat a block of code 
// for (initialization; condition; increment){
// // code to be executed    
// }

//initialization : let i = 0 sets starting point 
//conditin: i<5 keep the loop unning while i is less than 5
//increment :i++ increase i by 1 after each loop iteration 

// for (let i = 0; i <5; i++){
//     console.log(i); //outputs: 0, 1. 2 , 3 ,4
// }

// //const fruits = ["apple","banana", "orange", "mango", "grape"]

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// //while loop: the while loop is used when the number of terations isnt known 
// //before hand, it keeps runing as long as the cndition is true 
// //while (conditon){
//     //code to be exwcuted 

//     let i =0;
//     while (i <5){
//         condole.log(i); //outputs: 012345
//         i++
//     }
//do,,,,while loop: this loop ensures that block of code runs at least once 
// //before checkig the condition 

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
//     if(i===3){
//         break;
//     }   
// }

// //break;
// for (let i = 0; i <5; i++) {
//     if (i===3) break;
//     console.log(i); //output:012
// }


// //continue
// for (let i = 0; i <5; i++) {
//     if (i===3) continue;
//     console.log(i); //output:0,1 2 3 4 
// }

//function is a block of code that can perform an action  and can be resued 

// function greet(Emmanuel){
//     console.log("hello," + Emmanuel); //console display 
// }
// greet("Emmanuel");

// function add(a, b){
//     return a+b; //return means processing 
// }
// const sum =add(4,5)
// console.log(sum)


function multiply(a,b){
    return a*b; //return means processing 
}
const sum =multiply(4,5)
console.log(sum)

// function vic(name, course) {
//     console.log(Hello  ${name} ${course})
// };

// vic(John, FrontEnd);












//example1
const add1 = function(a,b){
    return a+b;

}
const sum2 = add1(1,2);
console.log(sum2)

// example2
const multiply1 = function (a,b){
    return a*b;

}
const times = multiply1(4,10);
console.log(times)


//example3

const course2 = function(name, course ,school){
   return ("Hello"+ name + " I am a "+ course + " at" + school);
}
console.log(course2(" Emmanuel", "frontend developer" , " New Horizon"));

//pratcice


const course3 = function(name,course,school,age,address){
    return("Hello, my name is"+ name + " I am a " + course + " at" + school + " And I'm "+ age +" I live in " + address)
}
console.log(course3 (" Emmanuel", " frontend developer"," New Horizon", " 25 years old", " Lagos"));

// document object model.(Dom-manipulation)



const button3 = document.getElementById("mybutton");

button3.addEventListener("click", function (e) {
    alert("hello world!");

});

const button4 = document.getElementById("Click");
button4.addEventListener("click", function (e){
    alert("Do not click");
});


////ArrayMethods.js



const fruits = ["Apple", "Banana", "Cherry"]
// Adding to the end
fruits.push("mango");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango"]

//Adding to the beginning.
fruits.unshift("Elderberry");
console.log(fruits); // ["Elderberry","Apple", "Banana", "Cherry", "Mango"]

// Removing elements from the array
//Explain methods like pop, shift, and splice for removing elements


//Removing from the end
fruits.pop();
console.log(fruits); // ["Elderberry","Apple", "Banana", "Cherry"]



//Removing from the beginning
fruits.shift ();
console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango"]


//Removing from a specific position
fruits.splice(1,1); //
console.log(fruits);

// Modifying Elements 
// Show ho to change  elements in an array.
const fruits2 = ["Apple", "Banana", "Cherry"]
fruits2[1] =  "Blueberry";
console.log(fruits2); //  ["Apple","Blueberry"]

const fruits3 = ["Apple", "Banana", "Cherry", "mango", "david"]
fruits3.splice(1,0, "coconut")
console.log(fruits3)

let array = [1,2,3,4,5,6,7,8]
array.splice(4)
console.log(array)


// using forEach
const fruits4 = ["Apple", "Banana", "Cherry"]
fruits4.forEach(function(fruit){
    console.log(fruit)
})

//map
const fruits5 = ["Apple", "Banana", "Cherry"]

let uppercasedFruits = fruits5.map(fruit=> fruit.toUpperCase());
console.log(uppercasedFruits); 

const add = (a,b) => a +b
add(2,4)



//filter

const fruits6 = ["Apple", "Banana", "Cherry","Blueberry"]
let longFruits = fruits6.filter(fruit => fruit.length < 6);
console.log(longFruits); //["Blueberry"]


//Find
const fruits7 = ["Apple", "Banana", "Cherry","Blueberry"]
let foundFruit = fruits7.find(fruit => fruit === "Apple");
console.log(foundFruit); 


// includes
const fruits8 = ["Apple", "Banana", "Cherry","Blueberry"]

let hasCherry = fruits8. includes("cherry");
console.log(hasCherry); //false


// combining Arrays
//Show how to concatenate arrays using concat.

let moreFruits = ["fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); 

// Sorting Arrays
//Explain how to sort arrays with sort

let sortedFruits = allFruits.sort();
console.log(sortedFruits);


// Reversing Arrays 
// Show how to reverse arrays with reverse.

let reversedFruits = allFruits.reverse();
console.log(reversedFruits); //


//Original Array
const numbers2 =  [1,2,3,4,5];


//using map t create a new array with each element doubled
const doubledNumbers = numbers2.map(number => number * 2);

console.log(doubledNumbers); 

const people =[
    { name: "Alice", age: 25},
    { name: "Bob", age: 30},
    { name: "Emmanuel", age: 25},

];

//Using map to create a new array with just  the names of the people
const names = people.map(person => person.name);

console.log(names);


const age = people.map(uzi => uzi.age)
console.log(age)


// .reduce()= The reduce method reduces the elements of an array to a single value

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum12);

console.log(`$${total.toFixed(2)}`);

function sum12(accumulator,element){
    return accumulator + element
}


// Another Example

const grades = [75,50,90,65,95];

const maximum = grades.reduce(getMax)
const Minimum = grades.reduce(getMin)
console.log(maximum)
console.log(Minimum)


function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator,element){
    return Math.min(accumulator,element);
}


// Function declaration = Define a reuseable block of code that 
//                        that performs a specific task


function hello(){
    console.log("Hello");
}

// function expressions = A way to define functions as values or variables

// const hello = function(){
//     console.log("Hello");
// }

// hello();

// setTimeout(hello,3000);

// setTimeout(function(){
//     console.log("Hello")
// }, 3000)

const numbers = [1,2,3,4,5,6]
const squares = numbers.map(function(element){
    return Math.pow(element,2)

});

const cubes = numbers.map(function(element){
    return Math.pow(element,3);
})
const evenNums= numbers.filter(function(element){
    return element % 2 === 0;

});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})

const total1 = numbers.reduce(function(accumulator,element){
    return accumulator+element;
})

console.log(total)

// function cube(element){
//     return Math.pow(element,3);
// }




// function square(element){
//     return Math.pow(element,2)

// }


// Sort() = Method is used to sort element of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          Lexicographic = (Alphabet + numbers + symbols) as strings




// Variable.js

//  What is a variable: A variable is a container that stores a value,
// behaves as if it where the value it contains.

//Declaration


let x;
x = 100

console.log(x)


let age1 = 30;
let price = 50
let apple = 25

console.log(`you are ${age1} years old`);
console.log(`The price of the watch is $${price}`)
console.log(`there are ${apple} apple`)

//How to check type of variable

console.log(typeof age1)
console.log(typeof price)

// string is a series of charaters
let firstName11 = "Uzi"

console.log(typeof firstName11)
console.log(`your name is ${firstName11}`);


//Booleans are either true or false

let online = false

console.log(`Uzi is online: ${online}`)

//...........End of Variables.....




