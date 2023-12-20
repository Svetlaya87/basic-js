const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let bool = false;
  console.log(n);
  let res = n.split('-');
  if(res.length === 6){
      res = res.map((el)=> el.split(''));
      console.log(res);
      bool = res.every((el) => el.length === 2 );

      if(bool){
          res = res.flat(1);
          res = res.filter(function(e){
                  if( Number.isNaN(e*1)){
                      return e;
                  }
          } );

          res = res.filter(e => e >'F');
          return res.length ===0 ? true : false;
      }
      


      console.log(res);
  }
  
  console.log(res);
  return bool;
}
module.exports = {
  isMAC48Address
};
