// closure is a feature in JavaScript where an inner function has access
// to the variable of its outer function, even after the outer function
// has finished executing.





// function outerFunction(){
//     const outerVariable = 'I am from other fuction';

//     function innerFunction(){
//         console.log(outerVariable)
//     }
//     return innerFunction;
// }
 
// const closureFunction = outerFunction();
// closureFunction();


// function createCounter(){
//     let counter = 0

//     return function(){
//         counter++;
//         return counter
//     };
// }

//const counterFunction = createCounter();
// console.log(counterFunction());
// console.log(counterFunction());
// console.log(counterFunction());
// console.log(counterFunction());
// console.log(counterFunction());


function createCounter(){
    let counter = 0;

    return{
        increment: function(){
            counter++;
            return counter;
        },

        decrement: function(){
            counter--;
            return counter;
        },
        getCount: function(){
            return counter;
        }
    }
}

const counterFunction = createCounter();
console.log(counterFunction.increment());
console.log(counterFunction.increment());
console.log(counterFunction.decrement());
console.log(counterFunction.decrement());
console.log(counterFunction.getCount());



//Callbackfunctions

//A callbackfunction is a function that is passed into another functon 
//As an argument, which is then invovked inside the outer
//function to complete some kind of routine or action.
//Function definition with a callback parameter


function sayHello(name, callback){
    console.log(`Hello ${name}`)
    callback();
}

function sayGoodbye(){
    console.log("Welcome to my App")

}

sayHello("Martins", sayGoodbye)

//function expression

function sayHello(name, callback){
    console.log(`Hello ${name}`)
    callback();
}

let a = function(){
    console.log("Welcome to my App")

};

sayHello("Martins", a)


//function arrow

const greet = (name,callback)=> {
    console.log(`Hello ${name}`)
    callback()
}

const question = () => {
    console.log("How are you doing")
}

greet("Uzi", question)




// const greetUser = (name, firstCallback, secondCallback) => {
//     console.log(`Hello ${name}`)
//     firstCallback()
//     secondCallback()
// }

// const welcomeMessage = () => {
//     console.log('welome to our app')
// }

// const offerService = () => {
//     console.log('please how can we help you?')
// }
// greetUser("martins", welcomeMessage, offerService)



//Classwork


const greet1User =(Name, Mine, Department, Workplace ) => {
    console.log(`I'm ${Name}`)
    Mine()
    Department()
    Workplace()
}

const firstMessage =() => {
    console.log("I study Full stack webdevelopment")
}

const secondMessage =() => {
    console.log("I work with Micorsoft")

}

const thirdMessage =()=>{
    console.log("I work with Nhs")
}

greet1User('Emmanuel', firstMessage, secondMessage, thirdMessage)





