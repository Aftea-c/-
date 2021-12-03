function create(fn, ...argus) {
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, argus);
  return res instanceof Object ? res : obj;
}

function User(name) {
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
};

let u = create(User, "dylan");

console.log("u", u);
