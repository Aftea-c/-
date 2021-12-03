// 扁平化 object / Array 格式的数据

const input = {
  a: 1,
  b: { c: 2, d: 3, e: { i: 8 } },
  f: [1, 2, 3, 4, 5],
  g: null,
  h: "la",
};

function flat(input) {
  if (typeof input !== "object") {
    throw new TypeError("input is not object");
  }

  function removeEmpty(obj) {
    if (Array.isArray(obj)) {
      return obj.filter((val) => !!val);
    }
    return Object.fromEntries(Object.entries(obj).filter(([_, val]) => !!val));
  }

  if (Array.isArray(input)) {
    while (input.some((val) => Array.isArray(val))) {
      input = [].concat(...input);
    }
    return removeEmpty(input);
  }

  function flatObject(obj, tempKey, result) {
    tempKey = tempKey || "";
    result = result || {};

    for (let [key, val] of Object.entries(obj)) {
      if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          result[`${key}[${i}]`] = val[i];
        }
        continue;
      }

      if (typeof val === "object" && !!val) {
        let addKey = tempKey + key + ".";
        flatObject(val, addKey, result);
      } else {
        result[tempKey + key] = val;
      }
    }
    return result;
  }

  return removeEmpty(flatObject(input));
}

function flattern(input, result, tempKey) {
  result = result || {};
  tempKey = tempKey || "";
  return Object.entries(input).reduce((sum, [key, value]) => {
    if (Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === "array") {
      value.forEach((val, index) => (sum[`${key}[${index}]`] = val));
      return sum;
    }
    if (Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === "object") {
      const nextKey = tempKey + key + ".";
      flattern(value, sum, nextKey);
    } else {
      if (!value) return sum;
      sum[tempKey + key] = value;
    }
    return sum;
  }, result);
}

console.log("flat())", flattern(input));
