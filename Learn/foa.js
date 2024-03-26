class Data{
    print(){
        return `Name: ${this.name} , Age: ${this.age} , Place: ${this.place}`;
    }
}

class Faculty{
    constructor(name,age,place){
        this.name = name;
        this.age = age;
        this.place = place;
    }
        
}
// const studentsData = new Map();
// studentsData.set("Rames",new Data("Ramesh" , 22 , "Nepalgunj"));
// studentsData.set("Suresh",new Data("Suresh" , 22 , "Nepalgunj"));
// studentsData.set("Sabin",new Data("Suresh" , 22 , "Nepalgunj"));
const s = new Data();
const s1 = new Faculty("Ram",12,"Kathmandu");
// console.log(s1);

console.log(s.print.call(s1));

// studentsData.forEach((values,keys)=>{
//     console.log(`${keys}  ${values.place}`);
// })

// for(let s of studentsData){
//     console.log(s[1]);
// }