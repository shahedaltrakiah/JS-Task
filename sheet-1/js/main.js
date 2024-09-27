//Data Types and Operators
//Q1:

// Q2:
console.log(typeof(100)); // main.js:1 number
console.log(typeof(73.9)); // main.js:2 number
console.log(typeof(NaN)); // main.js:3 number
console.log(typeof("Water"));// main.js:4 string
console.log(typeof(false));// main.js:5 boolean
console.log(typeof(9 != 11));// main.js:6 boolean
console.log( "Orange" + "e");// main.js:7 Orangee
console.log( "Orange" - "s");// main.js:8 NaN
console.log( "4" + "8");// main.js:9 48
console.log( "4" - "8");// main.js:10 -4
console.log( "name" + 3);// main.js:11 name3
console.log( "name" - 3);// main.js:12 NaN
console.log( 82 * "word");// main.js:13 NaN
console.log( 1 + "hello");// main.js:14 1hello
console.log( "hello" + 1);// main.js:15 hello1
console.log( 1+true);// main.js:16 2
console.log( "hello" + true);// main.js:17 hellotrue
console.log( typeof(Infinity));// main.js:18 number
console.log( 1=='1');// main.js:19 true
console.log( 1==='1');// main.js:20 false

//Strings:
//Q1
var s = "Welcome to Orange"
console.log(s.toUpperCase());// main.js:25 WELCOME TO ORANGE
console.log(s.slice(9,11).toUpperCase()); // main.js:26 O ****
console.log("Hello from Orange");// main.js:27 Hello from Orange
console.log(s.toLowerCase());// main.js:28 welcome to orange
console.log(s.length); // main.js:29 17
console.log('Welcome to "Orange"'); // main.js:30 Welcome to "Orange"
console.log(s + " Jordan"); // main.js:31 Welcome to Orange Jordan

//Q2:
var t = "cactus"
let firstLetter = t[0];
console.log(firstLetter + t.slice(1).replace('c','*')); // main.js:40 ca*tus

//Arrays
//Q1:
var array = ["Coding" , "Academy" , "By" , "Orange"]
console.log(array);
array.push("Jordan");
console.log(array);
array.splice(2);
console.log(array);
var array2 = ["Coding" , "Academy" , "By" , "Orange"]
array2.unshift("Welcome" , "To");
console.log(array2);
array2.splice(0,3);
console.log(array2);
var array3 = ["Coding" , "Academy" , "By" , "Orange"]
console.log(array3.join(" "));
console.log(array3);
array3.splice(1,2)
console.log(array3);

//Q2:
var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(vegetables);

fruit.splice(0,1)
console.log(fruit);

console.log(fruit.indexOf("orange"));

fruit.push("1");
console.log(fruit);


console.log(vegetables.length);

vegetables.push("3");
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4,2);
console.log(food);


console.log(food.reverse());


var string = food.join(" ");
console.log(string);

//Functions
//Q1:
function wordsToArray (word) {
    return word.split(" ");
}
var word = "Orange Jordan";
var arrayy = wordsToArray (word);
console.log(arrayy);

//Q2:
function digitsToStar (digits) {
    var stars = "*".repeat(7);
    return stars + digits.slice(7);
}

var digits = "0776807777" ;
var star = digitsToStar (digits);
console.log(star);

//Q3:
function hiddenemail () {
    var email = ("orange_academy@orange.jo");
    var hidden = email.replace("_academy",'...')
    console.log(hidden)
}
hiddenemail();

//Q4:
// function toUpperCasee (letter) {
//     var letter1 = letter.split(" ");
//     return letter1.toUpperCase;
// }
// var letter = ("coding academy by orange");
// var upperCase = toUpperCasee (letter1);
// console.log(upperCase);

//Q6:
function flipsnum(num) {
    return num.split('').reverse().join('');
}
var num = "92485";
var flipsnumber = flipsnum(num);
console.log(flipsnumber); 

//Q7:
var a = 3;
var b = 4;
var c = a;
var a = b ;
var b = c ;
console.log("a = ", a , "b = " , b);

//Q8:
function removeChar(s) {
    return s.slice(0, 3) + s.slice(4);
}
var s = "Orange";
var n = removeChar(s);
console.log(n); 

//Q9:
function mergestowstring (m1,m2){
    return m1.slice(1) + m2.slice(1);
}
var m1 = "lora";
var m2 ="inge"
var twostring = mergestowstring(m1,m2);
console.log(twostring);

//Q10:
function isCharAtEnds(char, str) {
    return str.startsWith(char) || str.endsWith(char);
}
console.log(isCharAtEnds("o", "orange")); 
console.log(isCharAtEnds("z", "orange"));

//Q11:
function stringToArray (w) {
    return w.split(" ");
}
var w = "Coding Academy by Orange"
var a = stringToArray (w);
console.log(a);

//Q12:
function reordersChar(o) {
    return o.split("").sort().join("");
}
var o = "orange";
var alphabeticallyChar = reordersChar(o);
console.log(alphabeticallyChar);


//Conditionals
//Q1:
var age = 18;
if (age > 60) {
    console.log("You may join the seniors’ program.");
} else if (age > 30) {
    console.log("You are not eligible. You may join other programs.");
} else if (age >= 18) {
    console.log("You are eligible. Start your application.");
} else {
    console.log("You may join the kids' program.");
}

//Q2:
function switchTheLetters(input) {
    var output = "";
    for (var i=0; i<input.length; i++) {
        if (input[i] == input[i].toUpperCase()) {
            output += input[i].toLowerCase();
        } else {
            output += input[i].toUpperCase();
        }
    }
    return output;
}

var input = "OrAnGe";
var outputResult = switchTheLetters(input);
console.log(outputResult);

//Q3:

//Q4:
var a = ["Coding" , "Academy" , "By" , "Orange"]
console.log(a.splice(0));

//Q5:
function isOddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
const x = 8;
console.log(isOddOrEven(x)); 

//Q6:
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
const inputValue = 3;
console.log(isNumber(inputValue));

//Q7:
function findLargest(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
const number1 = 10;
const number2 = 20;
console.log(findLargest(number1, number2)); 

//Q8:
function triangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}
const sideA = 5;
const sideB = 5;
const sideC = 3;
console.log(triangleType(sideA, sideB, sideC)); 

//Q9:
function isInRange(num, min, max) {
    return num >= min && num <= max;
}
const numberToCheck = 30;
console.log(isInRange(numberToCheck, 10, 20));

//Q10:
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const yearToCheck = 2024;
console.log(isLeapYear(yearToCheck)); 

//Loop
//Q1:
// Using a for loop
console.log("Even numbers using for loop:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
// Using a while loop
console.log("Even numbers using while loop:");
let j = 2;
while (j <= 50) {
    console.log(j);
    j += 2;
}

//Q2:
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//Q3:
// Using a for loop to print even numbers
console.log("Even numbers:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
// Using a while loop to print odd numbers
console.log("Odd numbers:");
let j2 = 1;
while (j2 < 50) {
    console.log(j2);
    j2 += 2;
}

//Q4:
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Q5-Q7:

//Q8:
function repeatChar (inputt,out){
    var result = 0;
    var inputLower = inputt.toLowerCase();

    for(var i=0; i<inputLower.length; i++ ){
        if (inputLower [i] == out){
            result ++
        }
    }
    return result;
}

var inputt = "Coding Academy by Orange";
var out = "o";
var theResult = repeatChar (inputt,out);
console.log(theResult);

//Q9:
//A:
function printNumber () {
    for (var i=0; i<21; i++ ){
        console.log(i);
    }
}
printNumber();

//B:
function oodValues (){
    for (var i = 3 ; i<30 ; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        } 
    }
}
oodValues ();

//C:
function evenValues (){
    for (var i = 12; i >= -14; i--){
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
evenValues();

//D:
function descendingValues () {
    for (var i = 50; i > 19 ; i--){
        if (i % 3 == 0){
            console.log(i);
        }
    }
}
descendingValues();


//Q10:
var c = "CodingAcademy";
var arr = [7, 500, 'KH404', 'black', 36]

//E:
for (i=0; i<arr.length; i++){
    console.log(arr.join("\n"));
}

//F:
var reversedChar = c.split("").reverse().join("\n");
console.log(reversedChar);


//Q11:
var aRRAY = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
var oddArray = []
var evenArray = []

for (i = 0 ; i< aRRAY.length; i++){
    if(i % 2 == 0){
        evenArray.push(aRRAY[i]);
    } else {
        oddArray.push(aRRAY[i]); 
    }
}

console.log("Even:", evenArray);
console.log("Odd: ", oddArray);


//Q12:
// Meal options
var proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
var grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
var vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
var beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
var desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];



