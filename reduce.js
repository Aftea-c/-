Array.prototype._reduce = function (callback, initValue) {
  for (let i = 0; i < this.length; i++) {
    initValue = callback(initValue, this[i], i, this);
  }
  return initValue;
};
