function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    timeout = null;
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
