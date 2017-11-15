
/**
*  takes in an array and returns an object with 
*  keys and values equal to the items in the array.
* 
* @param {object} arr - An array of primitive types
* 
* @returns {object} - an object with keys and values equal to the items in the parameter supplied.
*/
export default (arr) => {
  try {
    if (arr === undefined) {
      throw new Error(`objectKeyMirror: Error! Please supply and argument.`);
    } else if (!Array.isArray(arr)) {
      throw new Error(`objectKeyMirror: Error! Argument must be an array. ${arr} is not an array.`);
    }
    return arr.reduce((mirroredObject, token) => {
      mirroredObject[token] = `${token}`
      return mirroredObject;
    }, {});
  } catch (err) {
    console.error(err.message);
  }
};