// logical operation

// ||は左がfalseなら右を返す
const num = null;
const fee = num || "金額未設定です";

console.log(fee); // "金額未設定です"

//&&は左がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "設定しました";
console.log(fee2);
