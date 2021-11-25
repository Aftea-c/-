var company = {
  address: "beijing",
};
var yi = Object.create(company); //{}
delete yi.address;
console.log(yi.address);

//yi 继承自 company 是没有 address 属性 所以 delete 无效操作
