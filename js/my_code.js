//! Рукурсія
function calcPowerNumber(a, n){   //цикл
    let recolt = 1
    for(let i = 0; i < n; i++){
      recolt *= a
    }
    return recolt
  }
  console.log(calcSumm(12, 0))

  function calcPowerRecurs (a, n){  //рекурсія
    if(n === 1){
     return a
    } else {
     return a * calcPowerRecurs(a, n-1)
    }
 }
 console.log(calcPowerRecurs(3, 3))

 //!факторіал рахує рекурсією
function calcFactorial(n){
  if(n === 1 ){
    return 1
  }else{
    return n * calcFactorial(n-1)
  }
}
console.log(calcFactorial(4))


function calc_Factorial(n){
  if(n === -1){
   return -1
  }else{
    return n * calc_Factorial(n + 1)
  }
}

console.log(calc_Factorial(-3))

  //------------------------------------------------------------
//! рандомне число в певному діапазоні
function randomRange(myMin, myMax) {
  return   Math.floor(Math.random() * (myMax - myMin + 1)) + myMin ;
}
console.log(randomRange(4, 18));
//------------------------------------------------------------

//! використання collback функції
const enterNum = prompt("Enter the numbers and the action separated by commas").split(",");
 const action = enterNum[2];
 const a = +enterNum[0];
 const b = +enterNum[1];

function checkAction(a, b, action, plus, minus, multiply, divide){
    action == "+" ? plus():
    action == "-" ? minus():
    action == "*" ? multiply():
    action == "/" ? divide():
    null
}

function calcPlus(){
    alert(a + b)
}
function calcMinus(){
    alert(a - b)
}
function calcMultiply(){
   alert(a * b)
}
function calcDivide(){
    alert(a / b)
}
//----------------------------
function calcTax(sum ,procent){
  return sum / 100 * procent
 }
 
 function tax(sum){
   return sum - calcTax(sum, 1.5) - calcTax(sum, 20)
 }
 
 console.log(tax(10000))

//! Loops while and do..while

let age = prompt("Enter age")
while (isNaN(age)) {
  age = prompt("Enter age")
}

let ageName;
do{
   ageName = prompt("Enter age")
} while(isNaN(ageName))

//------------------------------------------
//!перетворення типів
console.log(100 + ""); //number in string
console.log(200 + 100 + "");
console.log("" + 100 + 20);

console.log(+"123");  //string in number
console.log(parseInt("123djjd53"));
console.log(parseFloat("145.45kskk"));


console.log(!!-100); //number in boolean
console.log(!!0);
console.log(!!"shfj"); //string in boolean
console.log(!!'');

console.log(true + ""); // boolean in string

console.log(+true); // boolean in number
console.log(+0)

//! сума улументів масиву
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
  return sum
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

console.log(calcSumm(1,2,3,5,3,6,7))

