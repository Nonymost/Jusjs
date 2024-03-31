var jsonUser;
function getRequest() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(e) {
       if (this.readyState === 4 && this.status === 200) {
         jsonUser = JSON.parse(this.responseText);
       }
    }
    xhr.open('GET', "test.json", false);
    xhr.send();
 }
getRequest();

for(let user of jsonUser){
    // console.log(user.name,":",user.age,":",user.place);
}

function Hello(){
    console.log("Hello");
}
function Bye(){
    console.log("bye");
}

var p = new Promise(function(resolve, reject){
    // console.log(Check + 20);
        resolve(Hello());
        reject(Bye());
});

p.then(function(value){
console.log(value);
});
