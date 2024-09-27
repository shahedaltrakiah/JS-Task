//Q1:
var arr = [1,2,3,4,5]
arr.forEach(element => console.log(element));

//Q2:
var array = [1, 2, 3, 4, 5];
var squaredArray = array.map(function(element) {
    return element * element;  
});
console.log(squaredArray);


//Q3:
var array2 = [1,2,3,4,5]
for (var i=0; i<array2.length; i++){
    if (i % 2 !== 0){
        console.log(array2[i]);
    }
}

//Q4:
var array3 = [1,2,3,4,5];
function getSum (){
    var sum = 0 ;
    for (i=0; i<array3.length; i++){
        sum += array3[i]
    }
    console.log(sum);
}
getSum();

//Q5:
var fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits);

//Q6:
var fruits = ["banana", "apple", "orange"];
fruits.reverse();
console.log(fruits); 

//Q7:
var array1=[1,2,3]
var array2 = [3,4,5]
console.log(array1.concat(array2));

//Q8:
var array1=[1,2,3,4,5,6]
console.log(array1.slice(2,4));

//Q9:
var array1=[1,2,3,4,5,6]
console.log(array1.splice(3));

//Q10:
var array = [1,2,3,4,5]
console.log(array.indexOf(3));

//Q11:
var array = [1,2,3,4,5]
console.log(array.join(" "));

//Q12:
var string = "1, 2, 3, 4, 5";
var newArray = string.split(", "); 
console.log(newArray); 

//Q13:
var array = [1,2,3,4,5]
console.log(array.length);

//Q14:
var array = [1,2,3,4,5]
for (var i=0; i<array.length; i++){
    var a = array.join(" ")
    console.log(a);}

//Q15:
var array = [1,2,3,4,5]
for (var i=0; i<array.length; i++){
    console.log(i);
}

//Q16:
var array = [1,2,3];
if (Array.isArray(array)){
    console.log("true");
}

//Q17:
var str = "Hello";
var charArray = Array.from(str);
console.log(charArray); 

//Q18:
var numbersArray = Array.of(1, 2, 3, 4, 5);
console.log(numbersArray); 

//Q19:
var array = [1, 2, 3, 4, 5];
array.fill(0,0,3);
console.log(array); 

//Q20:
var array = [1, 2, 3, 4, 5];
array.copyWithin(1,0,3); 
console.log(array); 