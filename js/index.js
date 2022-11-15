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

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat() {
    console.log("nom nom nom");
  },
  describe() {
    // console.log("My name is " + this.name);
  },
};

Dog.prototype.describe();

function countSheep(n) {
  let strSheep = "";
  if (n === 0) {
    return strSheep;
  } else {
    for (let i = 1; i < n + 1; i++) {
      let newStr = `${i} sheep...`;
      strSheep += newStr;
    }
    return strSheep;
  }
}

