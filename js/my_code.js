//! Рукурсія
function calcPowerNumber(a, n) {
  //цикл
  let recolt = 1;
  for (let i = 0; i < n; i++) {
    recolt *= a;
  }
  return recolt;
}
console.log(calcSumm(12, 0));

function calcPowerRecurs(a, n) {
  //рекурсія
  if (n === 1) {
    return a;
  } else {
    return a * calcPowerRecurs(a, n - 1);
  }
}
console.log(calcPowerRecurs(3, 3));

//!факторіал рахує рекурсією
function calcFactorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * calcFactorial(n - 1);
  }
}
console.log(calcFactorial(4));

function calc_Factorial(n) {
  if (n === -1) {
    return -1;
  } else {
    return n * calc_Factorial(n + 1);
  }
}

console.log(calc_Factorial(-3));

//------------------------------------------------------------
//! рандомне число в певному діапазоні
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(4, 18));


//------------------------------------------------------------

//! використання collback функції
const enterNum = prompt(
  "Enter the numbers and the action separated by commas"
).split(",");
const action = enterNum[2];
const a = +enterNum[0];
const b = +enterNum[1];

function checkAction(a, b, action, plus, minus, multiply, divide) {
  action == "+"
    ? plus()
    : action == "-"
    ? minus()
    : action == "*"
    ? multiply()
    : action == "/"
    ? divide()
    : null;
}

function calcPlus() {
  alert(a + b);
}
function calcMinus() {
  alert(a - b);
}
function calcMultiply() {
  alert(a * b);
}
function calcDivide() {
  alert(a / b);
}
//----------------------------
function calcTax(sum, procent) {
  return (sum / 100) * procent;
}

function tax(sum) {
  return sum - calcTax(sum, 1.5) - calcTax(sum, 20);
}

console.log(tax(10000));

//! Loops while and do..while

let age = prompt("Enter age");
while (isNaN(age)) {
  age = prompt("Enter age");
}

let ageName;
do {
  ageName = prompt("Enter age");
} while (isNaN(ageName));

//------------------------------------------
//!перетворення типів
console.log(100 + ""); //number in string
console.log(200 + 100 + "");
console.log("" + 100 + 20);

console.log(+"123"); //string in number
console.log(parseInt("123djjd53"));
console.log(parseFloat("145.45kskk"));

console.log(!!-100); //number in boolean
console.log(!!0);
console.log(!!"shfj"); //string in boolean
console.log(!!"");

console.log(true + ""); // boolean in string

console.log(+true); // boolean in number
console.log(+0);

//! сума елементів масиву
const numbers = [1, 2, 3, 4, 5, 6];

function sumElemInArr(arr) {
  let resolt = 0;
  for (let i = 0; i < numbers.length; i++) {
    resolt += numbers[i];
  }
  return resolt;
}
console.log(sumElemInArr(numbers));

function sumElemInArr2(arr) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumElemInArr2(numbers));

//! argumetns
function calc() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2];
  }
}
console.log(calc(2, 4));
console.log(calc(2, 4, 6));

// рахує довільну кількість аргументів
function calcSumm() {
  let resolt = 0;
  for (let i = 0; i < arguments.length; i++) {
    resolt += arguments[i];
  }
  return resolt;
}

console.log(calcSumm(1, 2, 3, 5, 3, 6, 7));

//кращий метод додати невідому кітькість аргументів
const sum = (...arg) => arg.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 7, 9))

//! Функції в обєктах
const users = [
  {
    name: "lisa",
    age: 23,
    nation: "Ukrain",
    sex: "girl",
    greting: function (msg) {
      console.log(
        `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`
      );
    },
    text: function (msg) {
      document.write(`${this.name} from ${this.nation}`);
    },
  },
  {
    name: "nasar",
    age: 34,
    nation: "Poland",
    sex: "boy",
    greting: function (msg) {
      console.log(
        `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`
      );
    },
    text: function (msg) {
      document.write(`${this.name} from ${this.nation}`);
    },
  },
  {
    name: "olya",
    age: 44,
    nation: "Ukrian",
    sex: "girl",
    greting: function (msg) {
      console.log(
        `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`
      );
    },
    text: function (msg) {
      document.write(`<h3>${this.name} from ${this.nation}</h3>`);
    },
  },
  {
    name: "halya",
    age: 32,
    nation: "Poland",
    sex: "girl",
    greting: function (msg) {
      console.log(
        `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`
      );
    },
    text: function (msg) {
      document.write(`${this.name} from ${this.nation}`);
    },
  },
  {
    name: "sasha",
    age: 21,
    nation: "UK",
    sex: "boy",
    greting: function (msg) {
      console.log(
        `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`
      );
    },
    text: function (msg) {
      document.write(`${this.name} from ${this.nation}`);
    },
  },
  {
    name: "anna",
    age: 32,
    nation: "Poland",
    sex: "girl",
    greting: function (msg) {
      console.log(
        `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`
      );
    },
    text: function (msg) {
      document.write(`${this.name} from ${this.nation}`);
    },
  },
  {
    name: "tanya",
    age: 21,
    nation: "UK",
    sex: "girl",
    greting: function (msg) {
      console.log(
        `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`
      );
    },
    text: function (msg) {
      document.write(`${this.name} from ${this.nation}`);
    },
  },
  {
    name: "oleg",
    age: 25,
    nation: "UK",
    sex: "boy",
    greting: function (msg) {
      console.log(
        `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`
      );
    },
    text: function (msg) {
      document.write(`${this.name} from ${this.nation}`);
    },
  },
];

function mesage() {
  for (let user of users) {
    user.greting();
  }
}
mesage();

function write() {
  for (let us of users) {
    us.text();
  }
}
write();

//! методи String
let str = "Hello World!";
let str2 = " How are you?";

console.log(str.concat("!!")); // зєднює два рядки
console.log(str.concat(str2));
console.log(str.toUpperCase()); // всі великі літери
console.log(str.toLowerCase()); // всі малі літери
console.log(str.startsWith("W")); // false
console.log(str.startsWith("Hel")); // true
console.log(str.endsWith("!")); //true
console.log(str.substring(0, 4)); //
console.log(str.indexOf("o")); // шукає індекс літери о
console.log(str.indexOf("o", 5)); //шукає індекс літери о, починаючи з 5 позиції
console.log(str.charAt(6)); // показує літуру, під індуксом 6
console.log(str.replace("l", "*")); // заміна, до першого входження
console.log(str.replaceAll("o", "#")); // заміна всіх знайдених
console.log(str.split(" ")); // string переводить у масив за вказано ознакою


//!  методи Array
const usersSmal = [
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

const nawAge = users.filter((value) => value.age > 22);             // filter
const name = age.forEach((value) => console.log(value.name));       // forEach
const maped2 = users.map((value,index) => {                         // map
  return { ...value, id: index + 1 };
});
const newUsers = users.map(function(value, index){
  return {
    name: value.name,
    id: index + 1,  
  }
})
console.log(maped2)
console.log(users.find((value) => value.nation === "UK"));          // find
console.log(users.every(value => value.age < 20));                  // every
console.log(users.some(value => value.age > 30))                    // some


//! Конструктори
function User (name, age, status){   // конструктор - Функція що визначає характеристики обєкта
  this.name = name;
  this.age = age;
  this.status = status;
  this.greting = function(){       // використю ф-ю
    console.log(`Hi ${this.name}`)
  } 
}

 const user1 = new User("nata", 22, true)    //new створює новий обєкт
console.log(user1)
user1.greting()
 const user2 = new User("anna", 24, false)
 console.log(user2)
 user2.greting()


// якщо в обєкті повинен бути ще обєктб то використовуємо: 
 function Users (name, age, status, frend){   //композицію
  this.name = name;
  this.age = age;
  this.status = status;
  this.frend = frend
  console.log(this)
}
 const users1 = new Users("nata", 22, true, {name: "iva", age: 23})    

 function Userss (name, age, status, frendName, frendAge){   //агрегацію
  this.name = name;
  this.age = age;
  this.status = status;
  this.frend = {name: frendName, age: frendAge}
  console.log(this)
}
 const userss1 = new Userss("nata", 22, true, 'iva', 24);


//! Object and OOP
function beep(){
  console.log(`${this.make} ${this.modal} beep-beep`)
}
const teslaX = {};
teslaX.make = "Tesla";
teslaX.model = "X";
teslaX.prise = 90000;
teslaX.beep = beep;

console.log(teslaX);
teslaX.beep();


const miniCooper = {
make: 'Mini',
modal: 'Cooper',
prise: 40000,
beep: beep,
}
console.log(miniCooper);
miniCooper.beep()

// конструктор
function Car(make, modal, prise){
this.make = make;
this.modal = modal;
this.prise = prise;
this.beep =  function(){
  console.log(`${this.make} ${this.modal} beep-beep`)
}
}

const porschPanamera = new Car('Porsch', 'panamera', 150000);
const fordMustang = new Car('Ford', 'Mustang', 200000);

// клас
class SuperCar{
constructor(make, modal, prise){
  this.make = make;        // назю власними властивостями
  this.modal = modal;
  this.prise = prise;
}
beep(){
  console.log(`Super car ${this.make} ${this.modal} beep-beep`)
}
}

const ferariLa = new SuperCar('Fereri', 'La', 200000)
console.log(ferariLa)
console.log(fordMustang)

class EVSuserCar extends SuperCar{              // наслідування
constructor(make, modal, prise, battery){
  super(make, modal, prise);
  this.battery = battery;
}
beep(){
  super.beep();
  console.log(`Battery ${this.battery}`)
}
}

const hummerEV = new EVSuserCar('GM', 'Hummer', 150000, 42);
console.log(hummerEV)
hummerEV.beep();


//! JSON
const miniCooperJSON = `{
"make": "'Mini",
"modal": "Cooper",
"prise": 40000
}`;

const miniCooperFromJSON = JSON.parse(miniCooperJSON);
console.log(miniCooperFromJSON);
miniCooperFromJSON.beep = beep;
miniCooperFromJSON.beep()
 
//! Регулярні вирази
function findSimilarity(str, word) {
  const regstr =
    word[0] + word.slice(1, -1).replace(/./g, ".") + word[word.length - 1];
  const regex = new RegExp("^" + regstr + "$") || "";

  return str
    .split(" ")
    .filter((x) => regex.test(x))
    .join(" ");
}

console.log(findSimilarity("bag dog dig dot doog dogs", "dog"));
