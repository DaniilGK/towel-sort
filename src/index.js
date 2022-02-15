
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
       if(matrix != null) {
         for(let i = 0; i < matrix.length; i++) {
           if(i % 2 == 0) {for(let e of matrix[i]) {result.push(e)}}
                    else {for(let j of matrix[i].reverse()) {result.push(j)}}
         }
     }
   return result 
}
