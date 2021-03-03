
module.exports = function towelSort (matrix) {
  let resultSort = [];
  if (matrix == undefined  || matrix.length == 0) {
    return [];
  }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            resultSort.push(...matrix[i]);
        } else {
            resultSort.push(...matrix[i].reverse());
        }
    }
    return resultSort;
}
 
