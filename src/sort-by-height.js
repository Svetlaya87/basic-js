const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  let numb = [];
    let res = arr.filter(el=> el !==-1).toSorted(function (a, b) {return a - b;});
    arr.filter(function(el,i){
        if(el === -1 ){
            numb.push(i);
        }
    });

    numb.filter(function(el){
        res=res.toSpliced(el, 0, -1);
    })
    console.log(res);
    console.log(numb);
    return res;
  
}

module.exports = {
  sortByHeight
};
