module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  matrix.forEach((e, i) => {
    if (i % 2 === 1) {
      e.reverse();
    }
  });
  return matrix.flat();
};
