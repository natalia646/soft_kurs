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


console.log(users.every(value => value.age < 20));
console.log(users.some(value => value.age > 30))