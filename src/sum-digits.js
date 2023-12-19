const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  console.log(n);

    let arrN = Array.from(String(n), Number);
    console.log(arrN);
    let Numb= [...arrN];
    while( Numb.length > 1 ){

        Numb = Numb.reduce( (acc, cur) => acc+cur, 0);
        Numb = Array.from(String(Numb), Number);

    }

    Numb = Numb.reduce( (acc, cur) => acc+cur, 0);

    console.log(Numb);

    return Numb;
}

module.exports = {
  getSumOfDigits
};
