function throttle(func, wait) {
  let btn = true;
  return function () {
    if (btn) {
      btn = false;
      func.apply(this, arguments);
      setTimeout(() => (btn = true), wait);
    }
  };
}
