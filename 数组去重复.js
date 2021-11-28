//ES5

let array = [1, 2, 3, 4, 5, 6, 5, 3, 2, 1];

function unique(arr) {
  return arr.filter((item, index, array) => array.indexOf(item) === index);
}

//ES6
function unique2(arr) {
  return [...new Set(arr)];
}
