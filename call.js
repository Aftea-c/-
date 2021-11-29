function create(fn, ...argus) {
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, argus);
  return res instanceof Object ? res : obj;
}
