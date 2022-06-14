// COUNT SCORES

let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];

function countScores1(people) {
  let totalScores = {};
  for (let person of people) {
    if (totalScores[person.name] === undefined) {
      totalScores[person.name] = person.score;
    } else {
      totalScores[person.name] += person.score;
    }
  }
  return totalScores;
}

console.log("countScores1()");
console.log(countScores1(peeps));

function countScores2(people) {
  let totalScores = {};
  people.forEach(person => {
      if (totalScores[person.name] === undefined) {
	totalScores[person.name] = person.score;
      } else {
	totalScores[person.name] += person.score;
      };
  });
  return totalScores;
}

console.log("countScores2()");
console.log(countScores2(peeps));

// Purely functional approach
// uses "computed property names"
let countScores3 = (people) => people.reduce((obj,pair) => {
  if (!obj[pair.name]) return {...obj, [pair.name]: pair.score};
  return {...obj, [pair.name]: obj[pair.name] + pair.score};
}, {});

console.log("countScores3()");
console.log(countScores3(peeps));

// And if you are insane
let countScores4 = (people) => people.reduce((obj,pair) => obj[pair.name] ?
					     {...obj, [pair.name]: obj[pair.name] + pair.score} :
					     {...obj, [pair.name]: pair.score}, {});

console.log("countScores4()");
console.log(countScores4(peeps));

// Notes on computed property names
// Syntax to allow us to use variables in object literal declarations

let myObj1 = {"hello": 30, "world": 41};

// suppose I had some function which programmatically determined which
// kvp I want to update;

function pickKey() {
  if (Math.floor(10 * Math.random()) % 2) return "hello";
  return "world";
}

myObj1 = {...myObj1, [pickKey()]: 1111};
// JS smart enough to know if key already exists!

// can even use string templates if we wanted
myObj1 = {...myObj1, [`new-${pickKey()}`]: 1111};
// JS smart enough to know if key already exists!

console.log(myObj1);
