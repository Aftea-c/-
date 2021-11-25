var a = [0];
if (a) {
  console.log(a == true);
} else {
  console.log(a);
}

Boolean([0]); //true

//比较的时候,会先隐士调用 json 方法 转换成'0'  string,boolean比较的时候会转换成number

Number("0"); // 0
Number(true); //1
