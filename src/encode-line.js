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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = str.split('');
  let filtered = str;
  let res = '';

  let str2 = Array.from(new Set(str));
  for(let i=0; i< str2.length; i++){
      let filtered2= filtered.filter(el=> el === str2[i]);
      if(filtered2.length !==0){
          res = res+filtered2.length + filtered2[0];
      }

      filtered = filtered.filter(el => el !== str[i]);

  }
  res = res.split('').filter(el => el*1 !==1).join('');

  return res;
}

module.exports = {
  encodeLine
};
