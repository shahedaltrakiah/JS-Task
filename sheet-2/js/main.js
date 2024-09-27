//Q1:
function findSmallest() {
    var array = [30, 45, 60, 7];
    var smallestValue = Math.min(...array);
    console.log(smallestValue);
}
findSmallest();

//Q2:
function alphabeticalOrder(h) {
    return h.split("").sort().join("");
}
var h = "hello";
var alphabeticallyChar = alphabeticalOrder(h);
console.log(alphabeticallyChar);

//Q3:

//Q4:
function typeOfNumber() {
    if (i % 2 !== 0) {
        console.log("Odd");
    } else {
        console.log("Even");
    }
}

//Q5:
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function evenNumber() {
    array2 = array2.filter(function (number) {

        return number % 2 == 0;
    });

    console.log(array2);
}
evenNumber();

//Q6:
var array3 = ["Ayham", 3, 7, "Alaa", 13, "Coding"];
function isNumber(item) {
    return typeof item === 'number';
}

function numbersOnly() {
    array3 = array3.filter(isNumber);
    console.log(array3);
}

numbersOnly();

//Q7:
function sumNumber(num) {
    let sum = 0;
    for (let i = num; i >= 0; i--) {
        sum += i;
    }
    return sum;
}
console.log(sumNumber(8)); 

//Q8:
var array4 = [7,13,3,77,100]

var lowestElement = Math.min(...array4);
console.log(lowestElement);

var highestElement = Math.max(array4);
console.log(highestElement);

console.log(array4.length);

function getAverage(array4) {
    let sum = 0;
    
    for (let i = 0; i < array4.length; i++) {
        sum += array4[i];
    }
    
    let average = sum / array4.length;
    
    return average;
}
console.log(getAverage(array4));  

var newArray = array4;
console.log("The new array:",newArray);

//Q9:

//Q10:
function countWords (words){
    let inputString = words.split(" ");    
    return inputString.length;
}

var words = ("SHAHED SAAD ALI ALTARAKIEH");
console.log(countWords(words));

//Q11:
function multiplyByLength () {
    let multiplArray = [];
    for (var i = 0; i<array5.length; i++){
        multiplArray.push(array5[i] * array5.length)
    }

    return multiplArray
}
var array5 = [2,4,6];
console.log(multiplyByLength(array5));

//Q12:
function endsWith(str1, str2) {
    return str1.endsWith(str2);
}
console.log(endsWith("CodingSchool", "Ac"));  
console.log(endsWith("CodingSchool", "ol"));  

//Q13:
function doubleChar(str3) {
    let doubledStr = '';
    for (let i = 0; i < str3.length; i++) {
        doubledStr += str3[i] + str3[i];  
    }
    console.log(doubledStr);
}
var str3 = "Coding";
doubleChar(str3);  

//Q14:
var array6 = ["Ali", "Mazen", "Murad"];
var str4 = "Ali";

function findIndex() {
    var index = array6.indexOf(str4);
    console.log(index);
}
findIndex();  

//Q15:
var array7 = [-1,-3,-5,-4,-10,0];
function getAbsSum (){
    var absSum = 0 ;
    for (i=0; i<array7.length; i++){
        absSum += array7[i]
    }
    console.log(Math.abs(absSum));
}
getAbsSum();
