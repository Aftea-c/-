function transformNumberToString(number) {
  if (typeof number !== "number") return new TypeError("is not number type!");
  const units = ["千", "百", "十"];
  function getNumberByString(str) {
    const list = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    return list[Number(str)];
  }
  const str = String(number);
  const arr = str.split("");
  let result = "";
  if (arr.length < 4) {
    result = arr.reduce((pre, val, index) => {
      return pre + getNumberByString(val);
    }, "");
  }
}

//5123  =>  五千一百二十三
//5023  =>  五千  零   二十三
