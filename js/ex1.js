const raw = prompt("Enter a number between 1 and 100:");
const input = raw === null ? "" : raw.trim();
const n = Number.parseInt(input, 10);
const valid = Number.isInteger(n) && n >= 1 && n <= 100;

const msg = (input === "" || Number.isNaN(n) || !valid)
  ? "Sorry, " + (raw || "") + " is not a valid entry."
  : "Thank you! You entered " + n + ", a valid number.";

console.log(msg);
const el = document.getElementById("out");
if (el) el.textContent = msg;

