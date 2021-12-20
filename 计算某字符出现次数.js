function dealNum(str, key) {
  let num = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((val) => {
      if (val === key.toLowerCase()) {
        num++;
      }
    });
  return num;
}

console.log(dealNum("abcABC", "A"));
