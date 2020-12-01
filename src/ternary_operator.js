//参考演算子
const num = "1300";

//金額表示のように三桁区切りにするメソッド
console.log(num.toLocaleString());

//typeofはjavaでいうinstanceOf
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力しろ";
console.log(formattedNum);

//関数のreturn文に三項演算子
const checkSum = (num1, num2) => {
  return num1 + num2 > 1000 ? "札で買います" : "硬貨で買います";
};

console.log(checkSum(1000, 150));
