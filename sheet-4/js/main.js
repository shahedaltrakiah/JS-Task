//Q1:

//Q2:
// var n2 = "";
// var array = [1,2,3,4,5]
// for (var i=0; i<array.length; i++){
//     n2 = n2 + array[i].map(Math.sqrt) + " "
// }
// console.log(n2);

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