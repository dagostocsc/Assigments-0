function titleCaseEdit(title) {
  return title
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;