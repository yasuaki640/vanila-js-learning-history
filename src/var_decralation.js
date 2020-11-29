/**
 * const, ketなどの変数宣言
 */
var val1 = "var変数";
console.log(val1);

// 上書き可能
val1 = "var変数は上書き可能";
console.log(val1);

// 再宣言可能
var val1 = "再宣言可能";
console.log(val1);

let val2 = "let";
console.log(val2);

// letは上書き可能
val2 = "let2";
console.log(val2);

// let val2 = "再宣言できない";

const val3 = "const変数";

// val3 = "上書きできない";
// const val3 = "再宣言できない";

// constで定義したオブジェクトはプロパティは変更可能
const val4 = {
  name: "yasu",
  age: 26
};
console.log(val4);

val4.name = "uwagaki";
console.log(val4);

// 配列も変更できる、、、
const val5 = ["dog", "cat"];

val5[0] = "bird";

val5.push("monkey");

console.log(val5);
