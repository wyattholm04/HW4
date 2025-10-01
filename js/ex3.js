const target = Math.floor(Math.random() * 100) + 1; // 1..100
let attempts = 0;

while (true) {
  const raw = prompt("Guess a number between 1 and 100 (inclusive):");
  if (raw === null) {
    console.log("Game cancelled.");
    break;
  }
  const guess = Number.parseInt(raw.trim(), 10);
  if (Number.isNaN(guess)) {
    console.log("Not a number. Try again.");
    continue;
  }

  attempts++;

  if (guess < target) {
    console.log("Too low, guess again.");
  } else if (guess > target) {
    console.log("Too high, guess again.");
  } else {
    console.log(`Correct! It took you ${attempts} attempt${attempts === 1 ? "" : "s"} to guess the correct number.`);
    break;
  }
} 