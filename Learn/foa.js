let string = "Apple123";

class Test{
  constructor(name,place){
    this.name = name;
    this.place = place;
  }
}
let t = new Test("Ram","Shankara");
t = new Test("ravi","ktm");
for(let i in t){
  console.log(i[2]);
}