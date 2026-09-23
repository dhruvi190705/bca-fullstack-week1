// Node.js Fundamentals - Week 7

console.log("Welcome to QuickBite!");

const studentName = "Dhruvi Patel";
const projectName = "QuickBite";

console.log("Student Name:", studentName);
console.log("Project Name:", projectName);

// Addition Function
function add(a, b) {
  return a + b;
}

// Subtraction Function
function subtract(a, b) {
  return a - b;
}

// Multiplication Function
function multiply(a, b) {
  return a * b;
}

// Division Function
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }

  return a / b;
}

// Function Outputs
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));
// Async/Await Practice

function getFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza order is ready!");
    }, 2000);
  });
}

async function orderFood() {
  console.log("Preparing your food...");

  const message = await getFood();

  console.log(message);
}

orderFood();