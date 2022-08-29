



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
// console.log(calcPowerNumber(12, 0))


function calcPowerRecurs (a, n){
   if(n === 1){
    return a
   } else {
    return a * calcPowerRecurs(a, n-1)
   }
}
// console.log(calcPowerRecurs(3, 3))




function calcMultiplArr (arr, n){
  let resolt = 1
  for(let i = 0; i < n; i++ ){
    resolt *= arr[i]
  }
  return resolt
}
 console.log(calcMultiplArr([2, 3, 4, 4, 6], 2 ))

 function calcArrRecurs(arr, n){
  if(n === 1){
    return arr[0]
  }else{
    return arr[n-1] * calcArrRecurs(arr, n-1)
  }  
 }
 console.log(calcArrRecurs([2, 3, 4, 4, 6], 1 ))



 function calcSumm(arr, n){
  let resolt = 0
  for(let i = 0; i < n; i++){
     resolt += arr[i]
  }
  return resolt
 }
 console.log(calcSumm([2, 3, 4, 4, 6], 3 ))




 function calcSummRecurs(arr, n){
if(n === 0){
  return 0
}else{
  return arr[n-1] + calcSummRecurs(arr, n-1)
}
 }
 console.log(calcSummRecurs([1], 1 ))



 function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}

console.log(rangeOfNumbers(5, 9))