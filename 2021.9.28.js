/**
 *  返回字符串第一个只出现一次的字符
 */

function dealString(string) {
  if (!string) return " ";
  let map = new Map();
  for (let s of string) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 1);
    } else {
      map.set(s, 1);
    }
  }
  for (let [key, val] of map) {
    if (val === 1) return key;
  }
  return " ";
}

//方法二

function aa(string) {
  if (!string) return " ";
  for (let i = 0; i < string.length; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      return s[i];
    }
  }
  return " ";
}
