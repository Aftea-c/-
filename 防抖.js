function debounce(func, wait) {
  let timeout;
  return function () {
    console.log("this", this);
    const context = this;
    const args = arguments;
    timeout = null;
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const betterFn = debounce(() => console.log("fn 防抖执行了"), 2000);

betterFn();
