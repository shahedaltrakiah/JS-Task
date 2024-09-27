//Q1:
var n = "";
for (var i=0; i<=10; i++){
    n = n + i + " "
}
console.log(n);

//Q2:
var i = 0;
var n2= "";
while (i<=10){
    n2 = n2 + i + " ";
    i++;
}
console.log(n2);

//Q3:
var array = [1,2,3,4,5] 
var n3 = "";
for ( var i = 0; i<array.length; i++){
    n3 = n3 + array[i] + " ";
}
console.log(n3);

//Q4:
var n4= "";
for (i=0; i <= 10; i++ ){
    if (i % 2 == 0){
        n4 = n4 + i + " ";
    }
}
console.log(n4);

//Q5:
var sum = 0;
for  (i=0; i<=10;){
    sum +=i++;
}
console.log(sum);

//Q6:
var array2 = [1,2,3,4,5]

var lowestElement = Math.min(...array2);
console.log(lowestElement);

//Q7:
var array3 = [1,2,3,4,5]

var highestElement = Math.max(...array3);
console.log(highestElement);

//Q11:
var array4 = [1, 2, 3, 4, 5];
var sum = 0;
for (let i = 0; i < array4.length; i++) {
    sum += array4[i];
}
let average = sum / array4.length;
console.log(average);

//Q12:
function factorial(n) {
    let result = 1; 
    for (let i = 2; i <= n; i++) { 
        result *= i;
    }
    return result;
}
let number = 5;
console.log(factorial(number));

//Q13:

//Q14:

//Q15:
var input = 5;
for (var i = 1; i <= 10; i++) {
    var r = i * input;
    console.log(input + " x " + i + " = " + r);
}

//Q16:
var array5 = [[1,2,3],[4,5,6],[7,8,9]];
var n7 ="";
for (var i = 0; i < array5.length; i++) {
    for (var j = 0; j < array5[i].length; j++) {
        n7 = n7 + array5[i][j] + " ";
    }
}
console.log(n7);


//Q17:
var array6 = [1,2,3,4,5];
for (var i = 0; i < array6.length; i++) {
}
console.log(array6.reverse([i]));

//Q18:
var array7 = [1,2,3,4,5];
var start = 2;  
var end = 4;    
var n5 ="";
for (var i = start; i <= end; i++) {
    n5 = n5 + array7[i] + " ";
}
console.log(n5);


//Q19:
var array8 = [1,2,3,4,5];
var step = 2;  
var n6 ="";
for (var i = 0; i < array8.length; i += step) {
    n6 = n6 + array8[i] + " ";
}
console.log(n6);

//Q20:
var array9 = [1,2,3,4,5];
var a = 4;
for (var i=0; i<array9.length; i++){
    if(array9[i] == a){
        console.log("true");
    } 
}

// Q21:
var array10 = [1, 2, 1, 3, 2, 1];
var target = 1;  
var frequency = 0;
for (var i = 0; i < array10.length; i++) {
    if (array10[i] == target) {
        frequency++;  
    }
}
console.log(frequency);
