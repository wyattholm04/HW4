const raw = prompt("Enter a number between 1 and 100:");
const input = raw === null ? "" : raw.trim();
const n = Number.parseInt(input, 10);
const valid = Number.isInteger(n) && n >= 1 && n <= 100;

if (input === "" || Number.isNaN(n) || !valid) {
  console.log("Sorry, " + (raw || "") + " is not a valid entry.");
} else {
  console.log("Thank you! You entered " + n + ", a valid number.");
}
