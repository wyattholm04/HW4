/* Tutorial 4
    Example 2 JavaScript code
*/

console.log("Holmbeck's Output from Tutorial 4 Example 2")

function arraySummary(arr) {
  return {
    firstElement: arr[0],
    lastElement: arr[arr.length - 1],
    length: arr.length
  };
}

const r1 = arraySummary([4, 8, 12, 5, 20]);
const r2 = arraySummary(["a", 2, "Hello", 6, [4, 5], "bye", { name: "Alice", score: 98 }]);

console.log(r1);
console.log(r2);

const el = document.getElementById("out");
if (el) {
  el.textContent = [
    "Example 1:",
    JSON.stringify(r1, null, 2),
    "",
    "Example 2:",
    JSON.stringify(r2, null, 2)
  ].join("\n");
}
