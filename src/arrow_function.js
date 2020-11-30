//従来の関数
const showStr = function (str) {
  return str;
};

// アロー関数
const showInt = (int) => int * int;

console.log(showInt(111));

// 処理が一行で終わればブラケット、returnが省略できる
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(1, 3));
