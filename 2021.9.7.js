/**
 * 判断输入字符串是否是回文字符串
 * @param {string} str
 * @returns {boolean}
 */

function reverseString(str) {
  if (typeof str !== String) {
    return false;
  }
  return str.split("").reverse().join("") === str;
}

console.log("result", reverseString("abccba")); //true
console.log("result", reverseString("abc")); // false


