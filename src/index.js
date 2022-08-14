/**
 * const let等の変数宣言
 */
const a = 1;
console.log(a);

const val = {
  name: "マーク",
  age: 26
};
val.name = "mark";
console.log(val);

const val5 = ["dog", "cat"];
val5.push("monkey");
console.log(val5);

console.log(`${a} + です`);

/**
 * 分割代入
 */
const myProfile = {
  name: "mark",
  age: 26
};
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}際です`;
console.log(message1);
//オブジェクトのプロパティにアクセスする場合、上記のようにオブジェクトを経由(myProfile.name)しないといけない。
//これだと冗長になってしまうので、分割代入をすることで、オブジェクトを経由せずそのプロパティにアクセスできる。
//つまり、配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入することを可能にする
const { name, age } = myProfile; // {}の中に取り出したいプロパティ。 右辺には取り出しもとのオブジェクトや配列
console.log(name, age);

//配列の場合の分割代入
const arry = [26, "mark"];
const message2 = `名前は${arry[1]}、年齢は${arry[0]}際です`;
console.log(message2);

const [age1, name1] = arry; //配列なので[]。その中に配列のインデックス番号ごとに代入させたい変数をかく。今回は最初に年齢を書いているので最初にageを記述。

const message3 = `名前は${name1}、年齢は${age1}際です`;
console.log(message3);

/**
 * スプレッド構文
 */
const arry10 = [1, 2, 3, 4, 5];
const sum = (num1, num2, num3, num4, num5) =>
  console.log(num1 + num2 + num3 + num4 + num5);
sum(...arry10);
//スプレッド構文は配列内の全ての要素を順番に取得する

const arry100 = ["テスト", "test"];
const arry1000 = [...arry10, ...arry100];
console.log(arry1000);
//このようにスプレッド構文を用いて配列の結合などもできる

/**
 * mapやfilterを使った配列の処理
 */
const nameArry = ["keigo", "mark", "daiki"];
for (let i = 0; i < nameArry.length; i++) {
  console.log(nameArry[i]);
}
//従来のfor文を使ったやり方が上記

const nameArry2 = nameArry.map((name) => {
  return name;
});
console.log(nameArry2);
//上記がmapを使ったやり方

nameArry.map((name) => console.log(name));
//map関数はコールバック関数の処理を配列の全要素に対して実行できる。
//コールバック関数の第一引数に配列の値が順番に渡ってくるので、それを利用して配列の各要素に処理を行える。
//第二引数にはインデックス番号、第三引数には現在処理している配列が渡ってくる
/**
 * filter:
 * 配列に対して条件が一致するものだけ取り出す
 */
const numArry = [1, 2, 3, 4, 5];
const newNumArry = numArry.filter((num) => {
  return num % 2 === 1; //奇数のものだけを取り出している。
});
console.log(newNumArry);

nameArry.map((name, index) => {
  if (name === "mark") {
    console.log(`${name}`);
  } else {
    console.log(`${name}さん`);
  }
});
//mapの処理れい。配列内の要素がmarkだった場合はさんをつけず、それ以外はさん付けのものを出力。

/**
 * 三項演算子:
 * ある条件 ?  条件がtrueの時 : 条件がfalseの時
 */
//例１
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

let num = 1300;
let value =
  typeof num === "number" ? num.toLocaleString() : "数字を入力してください";
console.log(value);

//例２
const checkSum = (num1, num2) => {
  return num1 + num2 < 1000 ? "1000以下です" : "1000以上です";
};
console.log(checkSum(500, 600));
