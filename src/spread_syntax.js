//spread ...
//配列を展開した値を渡す
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumTwo = (num1, num2) => console.log(num1 + num2);
sumTwo(...arr1);

//配列をまとめる
const arr2 = [1, 2, 3, 4, 5];
//分割代入 スプレッド構文を使うと他にいくつあろうが勝手に代入してくれる
const [numm1, numm2, ...arr3] = arr2;
console.log(numm1);
console.log(numm2);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

//中身をコピー (参照渡しではない)
const arr6 = [...arr4];
console.log(arr6);

//配列を結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);
