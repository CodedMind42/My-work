// 3.  Logical Operators
// AND (&&): Returns if both operators are true.
let isTrue = (5 > 3 && 3 > 5);
// OR (//): Returns true if at least one operators is true.
let isTrue2 = (5 > 3 || 3 > 5); // true
// NOT (!): Returns true if the operand is false.


// control structure
//1. conditoional statements 

// if statement: Executes a block of code if a a specified condition is true.
let x = 4;

if (x> 0) {
	console.log('x is positive');

}
// if... else statement: Executes a block of code if specified condition is true, otherwise // another block of code is executed.


if (x > 0){
	console.log('x is positive');

} else if (x == 0){
	console.log('x is zero');
} else {
	console.log('x is negative');
}
 

let temperature = 15;
if (temperature > 25){
	console.log("it's a hot day!")
} else if ("it's a warm day!"){
	console.log("it's a cold day!")
} else {
	console.log("it's a warm day!")
}

let fruit = "apple";
switch (fuit){
	case "banana":
	   console.log("it's a banana");
	   break;
	case "apple":
	   console.log("it's an apple");
	   break;
	case "orange":
	   console.log("it's an orange!");
	   break;
	default:
	   console.log("unknown fruit");
}


switch (true){
case fruit.includes(value):
	console.log(`${value} is in the fruits array.`);
	break;
default:
	console.log(`${value} is not in the fruits array`);
}


