import { posts } from "./hnextAvTitle";

//監督の抽出
let list = [];
for (let i = 0; i < posts.length; i += 1) {
  for (let j = 0; j < posts[i].kantoku.length; j = j + 1) {
    list.push(posts[i].kantoku[j]);
  }
}

const set1 = new Set(list); //重複の削除（setオブジェクト化）
const newList = Array.from(set1); //setオブジェクトを配列化

//Nodataの削除
let result = newList.filter((item) => {
  return item != "Nodata";
});

// pageUrlオブジェクトを追加
const newResult = result.map((result, index) => {
  return {
    kantokuName: result,
    pageUrl: "kantoku" + String(index),
  };
});

export const kantokus = newResult;
