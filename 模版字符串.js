function render(template, data) {
  const reg = /\{\{(\w+)\}\}/;
  if (reg.test(template)) {
    // 判断模板里是否有模板字符串
    const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段

    function deepData(label, obj) {
      //考虑 深层 obj
      for (let key in obj) {
        if (key === label) return obj[key];
        if (typeof obj[key] === "object") {
          return deepData(label, obj[key]);
        }
      }
    }

    template = template.replace(reg, deepData(name, data)); // 将第一个模板字符串渲染
    return render(template, data); // 递归的渲染并返回渲染后的结构
  }
  return template; // 如果模板没有模板字符串直接返回
}

let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let person = {
  name: "布兰",
  age: 12,
  label: { sex: "女" },
};
const str = render(template, person); // 我是布兰，年龄12，性别undefined

console.log(str);
