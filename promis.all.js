Promise.myAll = function (values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values is not a array");
  }
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < values.length; i++) {
      values[i].then((res) => {
        result[i] = res;
        if (++count === values.length) {
          resolve(result);
        }
      }, reject);
    }
  });
};

let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});

Promise.myAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});
