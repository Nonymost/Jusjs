console.log(
    "-----------------Happy Learning-------------------"
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
    __proto__ : user,
}

// guest.__proto__ = user;
let admin = Object.create(user);

// guest.class(12);
// console.log(admin.class(10));
admin.class(2);

function name(){
    this.nameInp = "ram";
} 
console.log(name.prototype);