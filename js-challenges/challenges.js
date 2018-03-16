////////////////////Challenge1//

//The function should take two arguments, Object and Array
//Function should return true when all elements in the array are keys in the object, 
//false otherwise
//Additional Challenge: No if/else statements allowed! 
//Example: 
/*
var testObj = {name: "john", age: 101};
var testArray = ["name", "age"];
//--> Returns True. Object keys and array elements match

var testObj = {name: "john", age: 101};
var testArray = ["name", "age", "height"];
//-->Returns False, Object Keys and array elements do not match.

var testObj = {name: "john", age: 101};
var testArray = ["Name", "age",];
//-->Returns False, Elements are not equal*/


// MY CODE
var testObj = {name: "john", age: 101};
var testArray = ["name", "age"];
	newArray = [];
 // newArray = ["name", "age"];

for (var k in testObj) {
		newArray.push(k);
	}


// //Complete this function
// function hasElems (array1, array2) {
// 	console.log(array1.sort()); // alphabetical order
// 	console.log(array2.sort()); // alphabetical order

// 	for (var i = 0; i < array1.length; i++) {
// 		for (var k = 0; k < array2.length; k++) {
// 			if (array2[k] === array1[i] && 
// 				array2.length === array1.length) {
// 				return true;
// 			}
// 			else {
// 				return false;
// 			}
// 		}
// 	}
// };

// console.log(hasElems(testArray, newArray));





// CALUM CODE
function hasElems(obj, arr) {
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    console.log(keys.sort());
    console.log(arr.sort());
    return arr.every(function(element, index) {
        return element === keys[index]; // element refers to the arr element's VALUE.
    });
};										// keys[index] refers to keys element's INDEX.


console.log(hasElems(testObj, testArray));
// Converts the object in an array by looping over the object and pushing the elements in the new array.
// Sorts both arrays so all elements are in alphabetical order.
// .every work similar to a loop, so it does something for each element encountered.
// "(element, index)": this bit is pre-set so I could put any name but the first position will always 
// refer to the element's VALUE in the array and the second position will always refer to the element's INDEX.
// This function is checking if elements in array are equals and in the same position to the same elements in keys,
// this is WHY we must use sort. method in order for the element to compare.
// !!! This can fail because we are not checking the legth...
















/*
////////////////////Challenge2//


//Calculate the sum of the elements in an array
var numbers = [10,23,42,193,75,12,14,82,44];
//--> Returns 495

var sum = 0;

	for (var i = 0; i < numbers.length; i++) {
		sum = sum + numbers[i];
	}

console.log(sum);*/


















/*
//////////////////Challenge3//


//Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

//Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //=> returns "(123) 456-7890"

//The returned format must be correct in order to complete this challenge. 
//Don't forget the space after the closing parenthese!


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber (array) {

	var newArray = [];

	newArray.push('"(');

	for (var i = 0; i < 3; i++) {
		newArray.push(array[i]) 
	}

	newArray.push(') ');

	for (var k = 3; k < 6; k++) {
		newArray.push(array[k]);
	}

	newArray.push('-');

	for (var j = 6; j < array.length; j++) {
		newArray.push(array[j]);
	}

	newArray.push('"');

	console.log(newArray.join(""));
}

createPhoneNumber(numbers);*/


















/*
///////////////////Challenge4//


// Take two arguments:
// item: represents what the user wants to buy
// money: represents how many dollars a user has
// return true if a user can afford a given item according to the price chart below, and false otherwise:
// 'MacBook Air' - $999
// MacBook Pro' - $1299
// 'Mac Pro' - $2499
// 'Apple Sticker' - $1
// Return false if the item is not in the above list of Apple products
// Do this with 0 'if' conditions! (Hint: Place the above price table in an object).

canIGet('MacBook Air', 100) // returns false
canIGet('MacBook Air', 1000) // returns true*/



/*var appleStore = {
	"MacBook Air" : 999,
	"MacBook Pro" : 1299,
	"MacPro"      : 2499,
	"Apple Sticker": 1
}

// in the above object things in brackets are properties and numbers are values. 
//By selecting the properties, I actually refer to the value.

function match (product, price) {

	return appleStore[product] <= price;  // [product] into square brackets is the way to access the property name, which refers to their price.
											// price here is the amount of money the user owns
}											// basically this is comparing the properties prices with the user budget: if the product price is minor or equal to my budget, it will return true. If not it will return false.

console.log(match("Macbook Air", 900));		// I run the function refering to the property name of the object I want to buy and my budget.*/





