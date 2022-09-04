// function padIt(str, n) {
//   while (n > 0) {
//     if (n % 2 === 0) {
//       str = str + "*";
//     } else {
//       str = "*" + str;
//     }
//     n--;
//   }
//   return str
// }

// console.log(padIt("a", 3));

// function nameS (str, k){
// while ( k > 0){
//   str = "cool" + str;
//   k--;
// }
// return str
// }



// const cars = ["cat", "car"];
// cars[1] = "dog";
// console.log(cars);


const nums = [1, 13, 4, 45, 433, 321, 52, 511];
// const compare = (a, b) => a - b;
// nums.sort(compare);

// console.log(nums.filter( nums => nums % 2 === 0 ));
// console.log(nums.filter( nums => nums % 2 !== 0 ));


function warnTheSheep(queue) {
    for( const wolf in queue){
      if( wolf === queue.length - 1){
        return "Pls go away and stop eating my sheep"
     }else {
       return `Oi! Sheep number ${} ! You are about to be eaten by a wolf!`
       }
     }
   }

   const arr = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", 'sheep']


  console.log(warnTheSheep(arr))