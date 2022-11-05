module.exports = function towelSort(matrix = []) {
  matrix.forEach((arr, i) => {
    if ((i + 1) % 2 === 0) {
      arr.reverse();
    }
  });

  return matrix.flat();
};
