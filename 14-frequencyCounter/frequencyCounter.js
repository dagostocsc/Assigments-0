function frequencyCounter(word) {
  let count = 0;
    let frequency = {};

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    for (let j = 0; j < word.length; j++) {
      if (letter === word[j]) {
        count++;
      }
    }
    frequency[letter] = count;
    count = 0;
  }

  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;