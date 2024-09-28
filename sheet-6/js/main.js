//Q1:
var object1 = {
    name : "Adam",
    age : 25 ,
    gender : "male"
};
console.log(object1);

//Q2:
var object2 = {
    name : "Adam",
    age : 25 ,
};
object2.gender = "male";
console.log(object2);

//Q3:
var object3 = {
    name : "Adam",
    age : 25 ,
};
object3["gender"] = "male";
console.log(object3);

//Q4:
var object4 = {
    name : "Adam",
    age : 25 ,
};
console.log(object4.name);

//Q5:
var object5 = {
    name : "Adam",
    age : 25 ,
};
console.log(object5["name"]);

//Q6:
var object6 = {
    name : "Adam",
    age : 25 ,
    gender : "male"
};
for (var item in object6) {
    console.log(item + ": " + object6[item]);
}

//Q7:
var object7 = {
    name : "Adam",
    age : 25 ,
    gender : "male"
};
console.log(Object.keys(object7));

//Q8:
var object8 = {
    name : "Adam",
    age : 25 ,
    gender : "male"
};
console.log(Object.values(object8));

//Q9:
var object9 = {
    name: "Adam",
    age: 25,
    gender: "male"
};

console.log(Object.entries(object9));

//Q10:
var object10 = {
    name: "Adam",
    age: 25
};
var object11 = {
    gender: "male"
};
console.log(Object.assign(object10, object11));

//Q11:
var object12 = {
    name: "Adam",
    age: 25,
};
console.log(Object.freeze(object12));

//Q12:
var object13 = {
    name: "Adam",
    age: 25,
};
console.log(Object.seal(object13));
