
function isEven(n) {
  return n % 2 === 0;
}

const resultsDiv = document.getElementById("results");

// test with 4 and 5
const is4even = isEven(4);
const is5even = isEven(5);
resultsDiv.innerHTML += `Test with 4: ${is4even}<br>`;
resultsDiv.innerHTML += `Test with 5: ${is5even}<br>`;

// loop 1..10
for (let i = 1; i <= 10; i++) {
  resultsDiv.innerHTML += `${i} - ${isEven(i)}<br>`;
}
