//Q1:
var age = 27;
if (age>18){
    console.log("You are an adult");
}else {
    console.log("You are an teenager");
}

//Q2:
var score = 30;
if (score <= 50){
    console.log("You failed the test");
}

//Q3:
var n = "John";
if (n == "John"){
    console.log("Hello, John");
}else {
    console.log("Hello",n);
}

//Q4:
var day = "Friday";
if (day !== "Saturday" && day !== "Sunday") {
    console.log("It's a weekday");
} else {
    console.log("It's a weekend");
}

//Q5:
var num = 4;
if (num % 2 == 0){
    console.log("The number is even");
}else {
    console.log("The number is ood");
}

//Q6:
var char = "a";
if (char.match(/[a-zA-Z]/)) {
    console.log("It's a letter");
} else {
    console.log("It's not a letter");
}

//Q7:
var array = [1,2,3];
if (Array.isArray(array)){
    console.log("It's an array");
}

//Q8:
var x = 5;
if (x == Math.abs(x)){
    console.log("x is a positive number");
} else {
    console.log("x is a negative number");
}

//Q9:
var x = -5;
if (x !== Math.abs(x)){
    console.log("x is a negative number");
} else {
    console.log("x is a positive number");
}

//Q10:
var z = 9;
if (z % 3 == 0){
    console.log("z is a multiple of 3");
}else {
    console.log("z is not a multiple of 3");
}

//Q11:
var gpa = 3.5;
if ( gpa >= 3.0 ){
    console.log("Congratulations, you have a good GPA!");
}else{
    console.log("Oops, you have a pad GPA!");
}

//Q12:
var password = "mypassword123";
if (password.length >= 8){
    console.log("Your password is strong");
}else{
    console.log("Your password is week");
}

//Q13:
var age = 30;
if (age>=18 || age>=65){
    console.log("You are of working age");
}else{
    console.log("You are not of working age");
}

//Q14:
var color = "red";
if (color == "red" || color == "green" || color == "blue"){
    console.log("color is a primary color");
}else {
    console.log("color is not a primary color");
}

//Q15:
var inputt = 11;
function isNumber(){
    if (!isNaN(inputt)){
        console.log(inputt , "is a valid number");
    }else {
        console.log(inputt , "is not a valid number");
    }
}
isNumber(); 
