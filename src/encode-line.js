const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  str = str.split('');

  let acc=0;
  let res = acc+'';
  for(let i=0; i< str.length-1; i++){

      
      if( str[i] === str[i+1]){
          acc = acc+1;
          
      }

      if( str[i] !== str[i+1]){
          acc = acc+1;
          res = res + acc+str[i];
          acc=0;
      } 

      if( str[i] !== str[i+1] && i+1 === str.length-1){
          
          res = res +str[i+1];
          
      }

      if( str[i] === str[i+1] && i+1 === str.length-1){
          acc = acc+1;
          res = res + acc+str[i+1];
          acc=0;
          
      }
      
      
  }

  res = res.split('').filter(el => el*1 !==1 && el*1!== 0).join('');
  return res;
}

module.exports = {
  encodeLine
};
