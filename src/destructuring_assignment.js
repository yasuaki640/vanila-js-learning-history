//分割代入

const myProfile = {
  name: "yasu",
  age: 26
};

const profile = `名前は${myProfile.name}, 年齢は${myProfile.age}`;
console.log(profile);

//分割代入でプロパティ値を受け取る
const { name, age } = myProfile;
const profile2 = `名前は${name}, 年齢は${age}`;
console.log(profile2);

const myArr = ["yasu", 26];

const [name2, age2] = myArr;
const profile3 = `名前は${name2}, 年齢は${age2}`;
console.log(profile3);
