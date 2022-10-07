// const arr = ["cat", "dog", "fish", 2, 3, 4, "table", "picture", "chair"];

// //! splice
// // arr.splice(3, 3);

// arr.splice(3, 3, "arms", "legs");
// arr.splice(3, 0, "men")

// console.log(arr);

// function oddCount(n){
//   return Math.floor(n / 2)

// }
// console.log(oddCount(7))

// //! replace

// const a = [0, 1, 2, 3, 4, 5, 6, 7];
// const res = a.replace(/[0-4]/g, ())

// const myObj = {
//   id: 1,
//   firstName: "Lisa",
//   age: 23,
//   skils: ["js", "html"],
//   wife: {
//     nam: "ola",
//     age: 24,
//     skils: ["css", "java"],
//   }
// }

// console.log(myObj.id)
// console.log(myObj.skils[1])
// console.log(myObj.wife.age)
// console.log(myObj.wife.skils[0])

// const users = [
//   { skils: ["js", "css", ""], id: 1, name: "vasya", sexus: true, age: 31 },
//   {
//     skils: ["js", "css", "java"],
//     id: 2,
//     name: "petya",
//     sexus: false,
//     age: 25,
//   },
//   { skils: ["js", "css", "java"], id: 3, name: "anna", sexus: true, age: 32 },
//   { skils: ["js", "css", ""], id: 4, name: "olya", sexus: false, age: 24 },
// ];

// for(let i = 0; i < users.length; i++){
//   delete users[i].skils
// }

// console.log(users)

// let maunth = 2;

// switch (maunth) {
//   case 1:
//   case 2:
//     console.log("You are Ko");
//     break;
//   case 3:
//   case 4:
//     console.log("You are Wot");
//     break;
//   case 5:
//   case 6:
//     console.log("You are Fishes");
//     break;
// }

const users = [
  { name: "lisa", age: 23, nation: "Ukrain", sex: "girl" },
  { name: "nasar", age: 34, nation: "Poland", sex: "boy" },
  { name: "olya", age: 44, nation: "Ukrian", sex: "girl" },
  { name: "halya", age: 32, nation: "Poland", sex: "girl" },
  { name: "sasha", age: 21, nation: "UK", sex: "boy" },
  { name: "anna", age: 32, nation: "Poland", sex: "girl" },
  { name: "tanya", age: 21, nation: "UK", sex: "girl" },
  { name: "oleg", age: 25, nation: "UK", sex: "boy" },
];

// for (let user of users){
//     for(let skil in user){
//        document.write(
//         `<h3>${skil}: ${user[skil]}</h3>
//         `)
//     }
// }
// console.log(...number);

function calc() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2];
  }
}
// console.log(calc(2, 4));
// console.log(calc(2, 4, 6));


