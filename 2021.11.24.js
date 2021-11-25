/**
 * lodash _.get(obj,'a.b.c',defaultValue) 实现
 */

function _get(obj, path, val) {
  return path.split(/\./).reduce((v, k) => (v || {})[k], obj) || val;
}

/**
 * add(1)(2)(3)
 *
 * 柯里化函数
 */

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

/**
 * 实现一个链式调用的方式  核心就是调用完返回本身
 */

function M() {
  console.log("初始化");
}

M.prototype.method = function (params) {
  console.log(params);
  return this;
};

let c1 = new M();

c1.method("第一次调用").method("第二次调用").method("第三次调用");
