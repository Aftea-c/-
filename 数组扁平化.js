// Array.prototype.flat 能直接实现

[1, [2, [3]]].flat(2); // [1, 2, 3]

//ES5

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, [2, [3]]];

//ES6

function flatten2(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flatten2(arr));
