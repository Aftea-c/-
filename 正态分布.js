//有一个数组为;
var arr = [1, 2, 1, 3, 3, 2, 4, 6, 3];
//通过处理将其变为正态分布的形式
[(1, 2, 3, 3, 6, 4, 3, 2, 1)];

function transformArray(arr) {
  const sortArr = arr.sort((a, b) => b - a);
  return sortArr.reduce((pre, cur, index) => {
    index % 2 === 0 ? pre.push(cur) : pre.unshift(cur);
    return pre;
  }, []);
}

console.log("transformArray(arr)", transformArray(arr));
