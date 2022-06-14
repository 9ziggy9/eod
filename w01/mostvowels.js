/*
This prompt will have two functions:
* vowelCounter - a function that returns the total number of vowels in a given sentence
* mostVowelsFinder - a function that takes in an array of sentences and returns the
  index of the sentence that contains the most vowels
*/

function vowelCounter(sentence) {
  sentence = sentence.toLowerCase();
  let vowels = "aeoiu";
  let vowelCount = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) vowelCount++;
  }
  return vowelCount;
}

function mostVowelsFinder(sentences) {
  let mostIndex = 0;
  for (let i = 1; i < sentences.length; i++) {
    if (vowelCounter(sentences[i]) > vowelCounter(sentences[mostIndex])) mostIndex = i;
  }
  return mostIndex;
}

// TEST CONDITIONS
let sentence1 = "Bootcamp life is difficult"; // 0
let sentence2 = "JavaScript is a fun language"; // 1
let sentence3 = "Hope you all had a good weekend"; // 2
let sentence4 = "Good luck on Monday's assessment, you got this!"; // 3

console.log(vowelCounter(sentence1)); // 9
console.log(vowelCounter(sentence2)); // 10
console.log(vowelCounter(sentence3)); // 12
console.log(vowelCounter(sentence4)); // 13

let arr1 = [sentence1, sentence2, sentence3, sentence4]; // 3
let arr2 = [sentence2, sentence3, sentence1]; // 1
let arr3 = [sentence4, sentence1, sentence2]; // 0 
let arr4 = [sentence2, sentence1, sentence3]; // 2

console.log(mostVowelsFinder(arr1));
console.log(mostVowelsFinder(arr2));
console.log(mostVowelsFinder(arr3));
console.log(mostVowelsFinder(arr4));
