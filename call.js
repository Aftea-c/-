Function.prototype.myCall = function (context) {
  /**
   * 实际上就是 将函数挂载到传入的对象中 执行
   */

  // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中就是 window 对象)
  // 值为原始值(数字，字符串，布尔值)的 this 会指向该原始值的自动包装对象(用 Object() 转换）
  context = context ? Object(context) : window;

  context.fn = this;

  // 执行该函数
  const args = [...arguments].slice(1);
  const result = context.fn(args);

  // 删除该函数
  delete context.fn;

  return result;
};

function sayWord() {
  var talk = [this.name, "say", this.word].join(" ");
  console.log(talk);
}
var bottle = {
  name: "bottle",
  word: "hello",
  //相当于
  fn: function sayWord() {},
};
sayWord.myCall(bottle);
