// Ordinær function

function greet() {
  console.log("Hello!!");
}

greet();

function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Alice");

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);

// anonym function

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5));

// Arrow function

const divide = (a, b) => a / b;
console.log(divide(18, 2));

//high order function

function calculate(a, b, operation) {
  return operation(a, b);
}
const subtract = (x, y) => x - y;
console.log(calculate(10, 5, subtract));

// Methods

// String methods

let message = "Hello everybody!";

console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.includes("everybody"));
console.log(message.includes("world"));

//Array methods

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.push(6));
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

let doubled = numbers.map((num) => num * 2);
console.log(doubled);

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// date methods

let now = new Date();

console.log(now.toDateString());
console.log(now.getFullYear());
console.log(now.getHours());

// chaining methods

let resultMethod = "  Hello, Javascript!    "
  .trim()
  .toUpperCase()
  .replace("JAVASCRIPT", "WORLD");
console.log(resultMethod);
