const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  //matrix.flat(Infinity).every(el=> el ===0);
   let childLength = matrix[0].length;
 
   let res =[];
   
  for(let i =0; i< matrix.length-1; i++){
        
    for (let y=0; y< matrix[i].length; y++){
        if(matrix[i][y]===0 || matrix[i][y] === 'delete'){

           
            matrix[i+1][y] = 'delete';
     
        }
    }    

  }
    
    
    res= matrix.flat(Infinity).filter((el)=> el !== 'delete').reduce((acc, curVal)=> acc+curVal, 0);
    console.log(res);
   
  

   return res;
  
}

module.exports = {
  getMatrixElementsSum
};
