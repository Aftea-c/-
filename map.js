Array.prototype._map = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback && callback(this[i]));
  }
  return result;
};
