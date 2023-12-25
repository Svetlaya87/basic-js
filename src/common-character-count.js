const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  s1 = s1.split('').sort();
    s2 = s2.split('').sort();
    let current = s1;
    let bigger = s2;
    if(s1.length >= s2.length){
        current = s2;
        bigger = s1;
    }
    let res=0; 

    let filteredCurrent=[];
    for( let i=0; i< current.length; i++){
        filteredCurrent = current;
        let filteredBigger = bigger.filter(el => el === current[i]).length;
        let filteredCurrentLenth = filteredCurrent.filter(el=> el=== current[i]).length;
        res = res + Math.min(filteredBigger , filteredCurrentLenth);
        bigger = bigger.filter(el => el !== current[i]);
        filteredCurrent = current.filter(el=> el !== current[i]);
    }

    return res;
}

module.exports = {
  getCommonCharacterCount
};
