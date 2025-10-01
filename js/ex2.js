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

console.log(arraySummary([4, 8, 12, 5, 20]));
console.log(arraySummary(["a", 2, "Hello", 6, [4, 5], "bye", { name: "Alice", score: 98 }]));