const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let cats = 0;
  console.log(arr+'исходный массив');
  for(let i=0; i< arr.length; i++ ){
    

      let filtCats = arr[i].filter(el => el == '^^');
      cats  = cats+filtCats.length;
      filtCats =0;


    
  }

  if (cats == 0){
    return 0;
  }

  return cats;

}


module.exports = {
  countCats
};
