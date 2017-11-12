'use strict';
var objectKeyMirror = function main(arr) {
  try {
    if (arr === undefined) {
      throw new Error(`objectKeyMirror: Please supply and argument.`);
    } else if (!Array.isArray(arr)) {
      throw new Error(`objectKeyMirror: Argument must be an array. ${arr} is not an array.`);
    }
    var obj = {};
    arr.map(token => {
      obj[token] = `${token}`
    });
   return obj;
  } catch (err) {
    console.error(err);
  }
};

module.exports = objectKeyMirror;