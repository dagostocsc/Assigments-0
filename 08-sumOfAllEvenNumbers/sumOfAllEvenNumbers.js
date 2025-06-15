function sumOfAllEvenNumbers(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum ++;
    }
  }
  return sum;
}

sumOfAllEvenNumbers([0,1,2,3,4,5])
sumOfAllEvenNumbers([2,4,6,7,8,9,10])

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;