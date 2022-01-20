let arr = [
  { id: 1, name: "1", pid: 0 },
  { id: 2, name: "2", pid: 1 },
  { id: 3, name: "3", pid: 1 },
  { id: 4, name: "4", pid: 3 },
  { id: 5, name: "5", pid: 3 },
];

//方法一: 递归
function arrayToTree(arr) {
  const result = [];

  const getChildren = (res, id) => {
    for (let item of arr) {
      if (item.pid === id) {
        const newItem = { ...item, children: [] };
        res.push(newItem);
        getChildren(newItem.children, newItem.id);
      }
    }
  };

  getChildren(result, 0);

  return result;
}

//方法二: map  相当于一直操作map ,尾部添加
function arrayToTree2(items) {
  let res = []; // 存放结果集
  let map = {};

  // 先转成map存储
  for (const i of items) {
    map[i.id] = { ...i, children: [] };
  }

  for (const i of items) {
    //用当前id取出当前项
    const newItem = map[i.id];
    //当前pid === 0时候,做为根节点推入result
    if (i.pid === 0) {
      res.push(newItem);
    } else {
      if (Object.prototype.hasOwnProperty.call(map, i.pid)) {
        //用当前 pid 取到的 ,可以推当 他们的 children里
        map[i.pid].children.push(newItem);
      }
    }
  }
  return res;
}

console.log(arrayToTree2(arr));
