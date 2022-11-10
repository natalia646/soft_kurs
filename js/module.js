 function calcFactorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * calcFactorial(n - 1);
  }
}
// console.log(calcFactorial(4));

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
// console.log(randomRange(4, 18));

function calcSumm() {
  let resolt = 0;
  for (let i = 0; i < arguments.length; i++) {
    resolt += arguments[i];
  }
  return resolt;
}

// console.log(calcSumm(1, 2, 3, 5, 3, 6, 7));

// export {calcFactorial, randomRange};
export  default calcSumm

