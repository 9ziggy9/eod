let myPlusString = "hello, ";
let myConcatString = "hello, ";

myPlusString += "world"; // same as myPlusString = myPlusString + "world";
myConcatString = myConcatString.concat("world");

console.log("+: ", myPlusString);
console.log("concat: ", myConcatString);

myPlusString += 42;
myConcatString = myConcatString.concat(42); // Type error?

console.log("+: ", myPlusString);
console.log("concat: ", myConcatString);
