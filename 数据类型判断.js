//typeof 只能判断出 String Number Boolean Function Symbol Undefined

//对于其他的都会认为是object

//所以需要 Object.prototype.toString 实现

function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

// slice 第八个开始 到倒数第一个(不包含)
