// map filter

//map
const nameArr = ["tanaka", "yasu", "mio imada"];

const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2);

//二つ目の引数に序数を取れる
nameArr.map((name, index) => console.log(`${name}は${index + 1}番目です`));

//filter
const numArr = [1, 2, 3, 4, 5, 6];

const newnumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newnumArr);

const newNameArr3 = nameArr.map((name) => {
  if (name === "yasu") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr3);
