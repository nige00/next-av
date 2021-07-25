import React from "react";
import { posts } from "../../json/hnextAvTitle";
import { kantokus } from "../../json/kantokus";
import Link from "next/link";
import Image from "next/image";

const KantokuP = ({ data }) => {
  // 全ての女優を抽出（重複あり）
  let list = [];
  for (let i = 0; i < posts.length; i += 1) {
    for (let j = 0; j < posts[i].kantoku.length; j = j + 1) {
      list.push(posts[i].kantoku[j]);
    }
  }

  // listからNodataを削除
  let result = list.filter((item) => {
    return item != "Nodata";
  });

  // listデータで登場する同一名を同じ配列内に入れる
  const ninkido = [];
  for (let i = 0; i < kantokus.length; i++) {
    ninkido[i] = result.filter((item) => {
      if (item == kantokus[i].kantokuName) {
        return item;
      }
    });
  }

  // 配列内のデータ数に応じて並び替える（作品数が多い順になる）
  ninkido.sort(function (a, b) {
    if (a.length < b.length) return 1;
    if (a.length > b.length) return -1;
    return 0;
  });

  // 全作品データを評価順に並び替えておく
  posts.sort(function (a, b) {
    if (a.stars < b.stars) return 1;
    if (a.stars > b.stars) return -1;
    return 0;
  });

  // 表示したいデータを指定された数取得する。
  const popular_list = [];
  for (let i = 0; i < data; i++) {
    popular_list[i] = posts.find((item) => {
      if (item.kantoku == ninkido[i][0]) {
        return item;
      }
    });
  }

  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-x-14 gap-y-6">
      {popular_list.map((pl) => {
        return (
          <Link
            className=""
            key={pl.pageUrl}
            href={`/tags2/${
              kantokus.find((item) => {
                if (item.kantokuName == pl.kantoku) {
                  return item;
                }
              }).pageUrl
            }`}
            passHref
          >
            <a>
              <div className="mt-4 font-sans bg-pink-100 rounded px-6 py-3 hover:opacity-80 transition cursor-pointer">
                <a>
                  <h3 className="flex flex-1 flex-col justify-center items-center sm:text-base text-sm font-sans pb-2">
                    {pl.kantoku}
                  </h3>
                </a>

                <Image
                  src={pl.avImg}
                  alt={pl.avTitle}
                  width={1088}
                  height={612}
                />
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default KantokuP;
