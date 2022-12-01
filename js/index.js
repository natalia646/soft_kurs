// import * as myModule from "./module.js";
import calc from "./module.js";
// console.log(myModule.calcFactorial(5))
// console.log(myModule.randomRange(23, 34))
// console.log(calc(2, 4, 5))



const users = [
  {
    name: "anna",
    age: 32,
    nation: "Poland",
    sex: "girl",
  },
  {
    name: "tanya",
    age: 21,
    nation: "UK",
    sex: "girl",
  },
  {
    name: "vira",
    age: 24,
    nation: "UK",
    sex: "girl",
  },
 
];

 const user = {
    name: "vira",
    age: 24,
    nation: "Poland",
    sex: "girl",
  };

 function getSwitch ({nation}){
  switch(nation){
    case "UK":
      return 'Hello my British friend';
    case 'Poland':
      return 'Hello my best friend';
    case 'Ukrain':
      return  'Hello my love!';
  }
 }
 console.log(getSwitch(users));


 function calcSum (a, b){
  return a + b
 }

 function audit (answer){
   switch(true){

   }
 }