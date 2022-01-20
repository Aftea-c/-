let treeData = [
  {
    id: 1,
    name: "1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "2",
        pid: 1,
        children: [],
      },
      {
        id: 3,
        name: "3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "4",
            pid: 3,
            children: [],
          },
        ],
      },
    ],
  },
];

//方法一: for 循环
function flat(tree) {
  let result = [];
  for (let i = 0; i < tree.length; i++) {
    const { children, ...rest } = tree[i];
    if (children && children.length) {
      result = result.concat(flat(children));
    }
    result.push(rest);
  }
  return result;
}

//方法二 : for...of
function treeToArray(tree) {
  let res = [];
  for (const item of tree) {
    const { children, ...i } = item;
    if (children && children.length) {
      res = res.concat(treeToArray(children));
    }
    res.push(i);
  }
  return res;
}

//方法三: reduce
function treeToArray(tree) {
  return tree.reduce((res, item) => {
    const { children, ...i } = item;
    return res.concat(i, children && children.length ? treeToArray(children) : []);
  }, []);
}

console.log(flat(treeData));
