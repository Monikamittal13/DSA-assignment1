//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

const input = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2],
  sum = 7;
let result = [];
for (let i of [...new Set(input)]) {
  if (i <= sum) {
    if (input.includes(sum - i)) {
      result.push([i, sum - i]);
    }
  }
}

console.log(result);
