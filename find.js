Array.prototype._find = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback && callback(this[i], i)) {
      return this[i];
    }
  }
};

let result = [1, 2, 3, 4]._find((item) => item > 5);
console.log(result); // 2
