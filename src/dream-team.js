const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let name = [];
    for(let i=0; i<arr.length; i++){
        if( typeof(arr[i]) == 'string' ){

            arr[i] = arr[i].split('')
            .filter( el => el != ' ')
            .join('');
            console.log(arr[i]);
            name.push(arr[i][0].toUpperCase());
        }
    }

    console.log(name);
    name.sort();
    name = name.join('');
    console.log(name);
    return name;
}

module.exports = {
  createDreamTeam
};
