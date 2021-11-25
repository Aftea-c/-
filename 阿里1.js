//题目一：实现 `stringToArray` 函数，支持中英文逗号分隔。
//如：
```js
stringToArray('1') // => ['1']
stringToArray('1,2,3,4') // => ['1', '2', '3', '4'] // 英文逗号

stringToArray('1，2,3,4') // => ['1', '2', '3', '4'] // 中文逗号
stringToArray('1,,2,3,,,4') // => ['1', '2', '3', '4'] // 多个逗号
stringToArray(' 1,  2,3,, ,4\t ') // => ['1', '2', '3', '4'] // 空格
stringToArray('') // => []
stringToArray() // => []
stringToArray(true) // => []
```;
function stringToArray(str) {
  if (typeof str !== "string") {
    return [];
  }
  return str
    .split(/\s*[，,]\s*/)
    .map((val) => val.replace(/\s+/g, ""))
    .filter(Boolean);
}

//题目二：编写一个函数，实现输入任意一个JSON对象，返回这个对象中所有 Number 类型值之和
//如：
```
const jsonObj = {
    a: 1,
    b: {
        c: 2,
        d: "abc",
        e: [1,2]
    },
    e: {
        f: {
            g: 3
        }
    }
}

getSum(jsonObj);
// 返回结果 9
```;

function getSum(json) {
  let sum = 0;
  const deepJson = JSON.parse(JSON.stringify(json));
  function handleDeepjson(json) {
    const entry = Object.entries(json);
    for (let [key, value] of entry) {
      if (typeof value === "number") {
        sum += value;
      }
      if (Array.isArray(value)) {
        sum += value.reduce((pre, val) => pre + val, 0);
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        handleDeepjson(value);
      }
    }
    return;
  }
  handleDeepjson(deepJson);
  return sum;
}

//题目三：给定一个模板和一个对象，利用对象中的数据渲染模板，并返回最终结果。

//  let template = '你好，我们公司是{{ company }}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}等。'

//  let obj = {
//    group: {
//    name: '天猫',
//    jobs: ['前端']
//  },
//    company: '阿里'
//  }

//  render(template, obj) => 你好，我们公司是阿里，我们属于天猫业务线，我们在招聘各种方向的人才，包括前端等。
// function render(template,obj){
//    //正则...
//     return
//     obj[key]

// }

//题目四 请将下面代码编译成ES5版本
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`brand is ${this.brand}`);
  }
  startDelay(time) {
    setTimeout(() => {
      console.log(`brand is ${this.brand}`);
    }, time);
  }
}
// 你的实现
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  console.log(`brand is ${this.brand}`);
};

Car.prototype.startDelay = function (time) {
  setTimeout(() => {
    console.log(`brand is ${this.brand}`);
  }, time);
};

let newCar = new Car("brand");
