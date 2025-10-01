const target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const out = document.getElementById("out");
function write(line) {
  console.log(line);
  if (out) out.textContent += (out.textContent ? "\n" : "") + line;
}

while (true) {
  const raw = prompt("Guess a number between 1 and 100 (inclusive):");
  if (raw === null) { 
    write("Game cancelled."); 
    break; 
  }

  const guess = Number.parseInt(raw.trim(), 10);
  if (Number.isNaN(guess)) {
    write("Not a number. Try again.");
    continue;
  }

  attempts++;

  if (guess < target) {
    write("Too low, guess again.");
  } else if (guess > target) {
    write("Too high, guess again.");
  } else {
    write(`Correct! It took you ${attempts} attempt${attempts === 1 ? "" : "s"} to guess the correct number.`);
    break;
  }
}
