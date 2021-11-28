Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

//0 1   .then 2  .then(res) 3  5  =>  0 1 2 4 3 5   自己实现的 MyPromise

//0 1   .then 2  .then 3  .then(res)  5   Promise 源码中  .then return promise 类型处理的时候  会有两次.then操作
