//var color = "Blue";

function check(){
    console.log(color);
   // var color = "red";
    //let color="red"; //let ko accese nahi kar sakte 
};

var color="Blue";
check();
//es6 javascript ka version hai
//Destructuring
// let obj = { id:1,name:"vandi", color: "Blue" , subject: "DSA"};
// let {id,name} = obj;
// //console.log(obj);
// console.log(name);

//CURD operater:- curd operater three ... lagayo 
 let obj = { id:1,name:"vandi", color: "Blue" , subject: "DSA"};
let {id,name,...obj2} = obj;

 console.log(obj2);
 console.log(name);

let arr1 = ["Apple",2];
let arr2 = [...arr1,3,4];
console.log(arr2);

//object manipulation

let car = {make: "Toyota",mode: "Corolla"};
console.log(Object.keys(car)); //["make","mode"]
console.log(Object.values(car)); //["Toyota","Corolla"]
console.log(Object.entries(car));//[["make","Toyota"],["mode","Corolla"]]