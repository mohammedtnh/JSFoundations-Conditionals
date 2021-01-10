// Define the numbers and the operation here
const firstNumber = 3;
const secondNumber = 5;
const operation = "+";

// Write if-statements here
if (operation === "+") {
  console.log(
    `${firstNumber} ${operation} ${secondNumber} = ${
      firstNumber + secondNumber
    }`
  );
} else if (operation === "-") {
  console.log(
    `${firstNumber} ${operation} ${secondNumber} = ${
      firstNumber - secondNumber
    }`
  );
} else if (operation === "*") {
  console.log(
    `${firstNumber} ${operation} ${secondNumber} = ${
      firstNumber * secondNumber
    }`
  );
} else if (operation === "/") {
  console.log(
    `${firstNumber} ${operation} ${secondNumber} = ${
      firstNumber / secondNumber
    }`
  );
} else {
  console.log("This is a calculator, choose + or - or * or /");
}
