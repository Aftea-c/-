Array.prototype._filter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback && callback(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};
