//有一个数组为;
//通过处理将其变为正态分布的形式
// [(1, 2, 3, 3, 6, 4, 3, 2, 1)];
var arr = [1, 2, 1, 3, 3, 2, 4, 6, 3];

function transformArray(arr) {
  return arr
    .sort((a, b) => b - a)
    .reduce((pre, cur, index) => {
      index % 2 === 0 ? pre.unshift(cur) : pre.push(cur);
      return pre;
    }, []);
}

console.log("transformArray(arr)", transformArray(arr));

const normal = (arr) =>
  arr.sort((a, b) => b - a).reduce((all, n, i) => (all[i % 2 ? "push" : "unshift"](n), all), []);
normal([1, 2, 3, 3, 6, 4, 3, 2, 1]);
