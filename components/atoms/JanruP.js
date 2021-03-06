import React from "react";
import { posts } from "../../json/hnextAvTitle";
import { janrus } from "../../json/janrus";
import Link from "next/link";
import Image from "next/image";

const SubP = ({ data }) => {
  // 全ての女優を抽出（重複あり）
  let list = [];
  for (let i = 0; i < posts.length; i += 1) {
    for (let j = 0; j < posts[i].janru.length; j = j + 1) {
      list.push(posts[i].janru[j]);
    }
  }

  // listからNodataを削除
  let result = list.filter((item) => {
    return item != "Nodata";
  });

  // listデータで登場する同一名を同じ配列内に入れる
  const ninkido = [];
  for (let i = 0; i < janrus.length; i++) {
    ninkido[i] = result.filter((item) => {
      if (item == janrus[i].janruName) {
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
      if (item.janru == ninkido[i][0]) {
        return item;
      }
    });
  }

  // Linkは配列を展開して検索すると、表示がバグるなど色々問題があるので、配列内に
  // ひとつだけ存在するものが選ばれてる仕様
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-x-14 gap-y-6">
      {popular_list.map((pl) => {
        return (
          <Link
            className=""
            key={pl.pageUrl}
            href={`/tags3/${
              janrus.find((item) => {
                if (item.janruName == pl.janru) {
                  return item;
                }
              }).pageUrl
            }`}
            passHref
          >
            <a>
              <section className="block mt-4 font-sans bg-pink-100 rounded px-6 py-3 hover:opacity-80 transition cursor-pointer">
                <h3 className="flex flex-1 flex-col justify-center items-center sm:text-base text-sm font-sans pb-2">
                  {pl.janru}
                </h3>
                <Image
                  src={pl.avImg}
                  alt={pl.avTitle}
                  width={1088}
                  height={612}
                />
              </section>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default SubP;
