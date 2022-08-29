



// function calcAllinString (str) {
//     const probil = str.split(' ').length - 1;
//     const punctuation = [".", ",", "-", "!", "?", "'"];
//     const numerLetter = str.length - probil;
    

//     const allPropety = {
//         "number of letters": numerLetter,
//         "probils": probil,
//     }
//     return allPropety
// }

// console.log(calcAllinString("Do you love eat 1?"))


function calcPowerNumber(a, n){// рахує n степіль від числа a
  let recolt = 1
  for(let i = 0; i < n; i++){
    recolt *= a
  }
  return recolt
}
console.log(calcPowerNumber(12, 0))


function calcPowerRecurs (a, n){
   if(n === 1){
    return a
   } else {
    return a * calcPowerRecurs(a, n-1)
   }
}
console.log(calcPowerRecurs(3, 3))