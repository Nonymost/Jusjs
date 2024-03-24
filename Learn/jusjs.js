let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

console.log(
    "-----------------Happy Learning-------------------" +
    `\n${year}-${month + 1}-${day}\n`
);

// -----------functions in JS----------------

//Simple function 
function nsa(name, school = "turkey", age) {
    return name + " " + school + " " + age;
}

//Arrow function
const one = () => 1;
const two = (first = 1, second = 2) => (first + ' ' + second);

//variable function
var et = function (a) {
    return a;
};

//Asynchronous javascript

// const check = setTimeout(function(){   //setTimeout
//     console.log("Hello");
//  },10000);


// var i = 0;                             //setInterval
// const timerLoop = setInterval((num)=>{
//     i++;
//     console.log("Hello "+i);
//     if(i == num){
//         console.log("Clear");
//         clearInterval(timerLoop);
//     }
// },1000,2);

// --------- Prototypal inheritance ----------

let user = {
    name: "Ram",
    class: (num) => {
        console.log(num);
    },
}

let guest = {
    name: "Guest",
    __proto__: user,
}

// guest.__proto__ = user;
let admin = Object.create(user);

// guest.class(12);
// console.log(admin.class(10));
// admin.class(2);


//------------for each/ for in/ for of----------------

const name = "Rames";
const arr = [1, 2, 4, 3, 124];
// for(let i of arr){
//     console.log(i+"\n");
// }
// arr.forEach((i)=>{
//     console.log(i);
// })

const obj = {
    name: "ram",
    class: 10,
    age: 22,
}

// for(let i in obj){
//     console.log(i+" : "+obj[i]+"\t");
// };

// obj.forEach((value)=>{
//     console.log(value);
// })

//-----------------Sets------------------

const set = new Set(["ram", "shyam", "ramesh"]);
// set.add(["ram","shyam","hari"]);

set.add("ram");
set.add("sita");

// for(let x of set){
//     console.log(x);
// }

//----------------Maps-------------------
const mapin = new Map([
    ["Ram", "Bhaktapur"],
    ["Shyam","Kathmandu"],
]);
mapin.set("Ravi","Teja");
mapin.set("i","Teja");
// for(let x of mapin){
//     console.log(x);
// };

// ---->Map methods and properties
// console.log(mapin.get("Ram"));
// console.log(mapin.size);
// console.log(mapin.has("Shyam"));
// mapin.delete("Ram");
// mapin.clear();
// console.log(mapin.entries());
// console.log(mapin.keys());
// console.log(mapin.values());


// mapin.forEach(function(value, key){
//     console.log(`${key} ${value}`);
// });