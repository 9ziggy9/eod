// Given an array of objects; which contains the name of a playerand the score they received while playing a game, return an object which pairs a persons name, to the sum of all their individual scores.

let scores = [
  {name: "Anthony", points: 2}, // correspond to playing the game once
  {name: "Winnie", points: 2},
  {name: "Fred", points: 3},
  {name: "Winnie", points: 2},
  {name: "Fred", points: 2},
  {name: "Anthony", points: 4},
  {name: "Winnie", points: 1}
];

/*
  totalScores = {Anthony: 6, Fred: 5, Winnie: 5}
 */

function countScores1(scores) {
  let totalScores = {};
  for (let score of scores) {
    if (totalScores[score.name]) {
      totalScores[score.name] += score.points; 
    } else {
      totalScores[score.name] = score.points;
    }
  }
  return totalScores;
}

function countScores2(scores) {
  let totalScores = {};
  scores.forEach(obj => {
    let {name, score} = obj;
    if (totalScores[name]) totalScores[name] += score;
    else totalScores[name] = score;
  });
}

let countScores3 = (scores) => scores.reduce((obj, pair) => obj[pair.name] ?
					     {...obj, pair.name: obj[pair.name] + pair.points} :
					     {...obj, pair.name: pair.points}, {});


let helloNumber = num => num === 1 ? "hello, one" : "hello, not one";
// lazy evaluation

console.log(helloNumber(1));
console.log(helloNumber(2));

function numberedName(num) {
  if (num === 1) return "David";
  if (num === 2) return "Josh";
  if (num === 3) return "John";
  if (num === 4) return "Abel";
  return null;
};

let myObj = {'hello': 1, 'world': 2};

let myObj2 = {...myObj, [numberedName(3)]: 99};

console.log(myObj);
console.log(myObj2);
