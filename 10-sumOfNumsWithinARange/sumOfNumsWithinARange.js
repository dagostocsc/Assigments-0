function sumOfNumsWithinARange(nums, start, end)
{
  let count = 0;
  for (let i = 0; i < nums.length; i++)
  {
    const n = nums[i];
    if (n >= start && n <= end)
      {
        count++;
      }
  }
  return count; 
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;