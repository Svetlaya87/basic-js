const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  let res = [];
  

    if (!Array.isArray(arr)){
        console.log(arr);
        throw new Error("\'arr\' parameter must be an instance of the Array!");
    }

    for(let i=0; i<arr.length; i++){

        if(  (arr[i-2] === '--discard-next' && (arr[i] === '--double-prev' || arr[i] === '--discard-prev'))
        || ((arr[i] === '--double-prev'|| arr[i] === '--discard-prev') && arr[i-1] === undefined)
        || ( (arr[i] === '--double-next' || arr[i] ==='--discard-next')  && arr[i+1] === undefined)){
            continue;
           
        } else if( arr[i] === '--discard-next' && arr[i+1] !== undefined){
            i = i+1;
            console.log(arr[i]);
        }else if( arr[i] === '--discard-prev' && arr[i-1] !== undefined ){
            res.pop();
            console.log(arr);
        }else if( arr[i] === '--double-next' && arr[i+1] !== undefined){
            res.push(arr[i+1]);

        }else if(arr[i] === '--double-prev' && arr[i-1] !== undefined){
            res.push(arr[i-1]);
        }else{
            res.push(arr[i]);
        }

    }

    console.log(res);
    return res;
}

module.exports = {
  transform
};
