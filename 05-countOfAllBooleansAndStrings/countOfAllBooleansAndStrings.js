function countOfAllBooleansAndStrings(arr) {
let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (typeof val === "boolean" || typeof val === "string") {
      result++;
    }
  }
  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;