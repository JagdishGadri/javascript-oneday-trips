// function* range() {
//   for (let i = 0; i < 3; i++) {
//     yield Promise.resolve(i);
//   }
// }

// (async function () {
//   for await (item of range()) {
//     console.log("item", item);
//   }
// })();

const maxContiguosSum = (arrOfNumbers) => {
  let maxSum = 0;
  let indexes = { start: 0, end: 0 };
  for (let i = 0; i < arrOfNumbers.length; i++) {
    for (let j = i + 1; j <= arrOfNumbers.length; j++) {
      const sum = arrOfNumbers.slice(i, j).reduce((curr, acc) => {
        return acc + curr;
      }, 0);

      if (sum > maxSum) {
        maxSum = sum;
        indexes = { start: i, end: j + 1 };
      }
    }
  }
  return { maxSum, indexes };
};
