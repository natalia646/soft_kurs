//! Рукурсія

function calcPowerNumber(a, n){   //циклом
    let recolt = 1
    for(let i = 0; i < n; i++){
      recolt *= a
    }
    return recolt
  }
  console.log(calcSumm(12, 0))

  function calcPowerRecurs (a, n){  //рукурсія
    if(n === 1){
     return a
    } else {
     return a * calcPowerRecurs(a, n-1)
    }
 }
 console.log(calcPowerRecurs(3, 3))

 //факторіал рахує рекурсією
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

  //---------------------------------
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
