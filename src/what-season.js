const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result = '';
    
    let strDate = date.toLocaleDateString().split('.').map(el => el*1);
    console.log(strDate);

    if( arguments[0] == 0){

        console.log('Unable to determine the time of year!');
        return 'Unable to determine the time of year!';
    }

    // [31, 3, 2020]
    if( date.getFullYear() !== strDate[2] || date.getMonth() !== strDate[1] || date.getDate() !== strDate[0]  ){

        console.log('Invalid date!');
        return 'Invalid date!';
    }

    if (strDate[1] ==1 || strDate[1] == 2 || strDate[1] ==12 ){
     
        result = 'winter';

    }else if (strDate[1] ==3 || strDate[1] == 4 || strDate[1] ==5 ){
        result = 'spring';
    }else if (strDate[1] ==6 || strDate[1] == 7 || strDate[1] ==8 ){
        result = 'summer';
    } else if (strDate[1] ==9 || strDate[1] == 10 || strDate[1] ==11 ){
        result = 'fall';
    }

    console.log(result);
    return result;
}

module.exports = {
  getSeason
};
