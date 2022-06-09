const wordlist = require('./wordlist.json');
let myString = "";

for (let word of wordlist) {
  myString = myString.concat(word);
}
