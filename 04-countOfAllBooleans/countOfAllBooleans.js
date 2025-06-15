function countOfAllBooleans(arr) {
  let result = 0;
  arr.map((values) => {
    if (typeof values === "boolean") {
      result += 1;
    }
  });
  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleans;