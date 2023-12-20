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
  
  
  if( !date){

    //console.log('Unable to determine the time of year!');
    return 'Unable to determine the time of year!';
  }

  try{
    isNaN(date);
} catch{
    throw new Error('Invalid date!');
}

if( Object.prototype.toString.call(date) !== '[object Date]' ){

  
  //console.log('Invalid date!');
  throw new Error('Invalid date!');
  //return 'Invalid date!';

}

let result = '';
//console.log(date+'начальное значение');


let arrDate = [];

arrDate.push( date.getDate() );
arrDate.push( date.getMonth()+1 );
arrDate.push( date.getFullYear() );


//console.log( arguments[0] );


if (arrDate[1] ==1 || arrDate[1] == 2 || arrDate[1] ==12 ){
 
    result = 'winter';

}else if (arrDate[1] ==3 || arrDate[1] == 4 || arrDate[1] ==5 ){
    result = 'spring';
}else if (arrDate[1] ==6 || arrDate[1] == 7 || arrDate[1] ==8 ){
    result = 'summer';
} else if (arrDate[1] ==9 || arrDate[1] == 10 || arrDate[1] ==11 ){
    result = 'fall';
}

//console.log(result);
return result;

  
}

module.exports = {
  getSeason
};
