
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];

  if (matrix === undefined || matrix === arr) {
    return [];
  } else {

    for (i = 0; i < matrix.length; i += 1) {
      if (i % 2 === 0) {
        matrix[i].sort(function(a, b) {return a-b;});
      } else {
        matrix[i].sort(function(a, b) {return b-a;});
      }
    }
      
    for (i = 0; i < matrix.length; i += 1) {
        for (j = 0; j < matrix[i].length; j +=1) {
            arr.push(matrix[i][j]);
        }
    }

    return arr;
``}
}
