//! Pахує n степіль від числа a

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

  //------------------------------------------------------------
// рандомне число в певному діапазоні
function randomRange(myMin, myMax) {
  return   Math.floor(Math.random() * (myMax - myMin + 1)) + myMin ;
}
console.log(randomRange(4, 18));
//------------------------------------------------------------
