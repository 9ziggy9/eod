// function: is a self-enclosed set of procedures. A function has zero or more arguments.
// A function is said to be "declared" when we are defining it.
// It is said to be "invoked" when we are "calling it".

// If we wanted to encapsulate a "hello, world" inside of a function; we could declare it like:
function sayHello() {
  console.log("hello, world");
}

// Note that by convention, I have used a "Verb" to name a function. The reasoning here is a function
// is something that "does something". With few exceptions we follow this convention--such an exception
// is when the function is "answering a question".

// Functions can take arguments => an argument is a value which we pass to a function. The argument is
// "operated upon". In a function declaration, we define what we want to do with our arguments by noting
// what we call a "parameter".

// Suppose we want our function to say hello to a name:
function greetName(name) {
  console.log("hello,", name);
}

function greetFullName(firstName, lastName) {
  console.log("Hello,", firstName, lastName);
}

greetFullName; // functions are also variables, they are so called "first class citizens"

// console.log(greetFullName); // the interpreter is telling us that greetFullName is a "pointer" to a function

// Let's also go over conditionals.
// Conditional "conditionally" runs a procedure based on the value of its so called "predicate".
// We expect a predicate to be a boolean. Suppose I ammend our greetFullName function such that;

function greetFullNameConditionally(firstName, lastName) {
  if (false) console.log("Hello,", firstName, lastName);
}

greetFullNameConditionally("David", "Rogers");
