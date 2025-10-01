function isEven(n) {
  return n % 2 === 0;
}

const is4even = isEven(4);
const is5even = isEven(5);
console.log(is4even);
console.log(is5even);

for (let i = 1; i <= 10; i++) {
  console.log(`${i} - ${isEven(i)}`);
}