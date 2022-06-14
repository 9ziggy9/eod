/*

  Write a function sameCharCollapse that takes in a string and returns a collapsed version of the string.
  To collapse the string, we repeatedly delete 2 adjacent characters that are the same until there are no
  such adjacent characters. If there are multiple pairs that can be collapsed, delete the leftmost pair.
  For example, we take the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
  
*/

// Can I collapse some characters?
// (string) => true/false <-- ARE THERE DUPLICATE CHARS?
function isCollapsible(string) {
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i-1]) return true;
  }
  return false;
}

function sameCharCollapse(string) {
  let collapsible = true;
  while (collapsible) {
    collapsible = false;
    let arr = string.split('');
    for (let i = 1; i < arr.length; i++) {
      if (string[i] === string[i-1]) {
	arr.splice(i-1, 2);
	string = arr.join('');
	collapsible = true;
      }
    }
  }
  return string;
}

// TEST CONDITIONS
console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
console.log(sameCharCollapse("aabaacc")); // abac
