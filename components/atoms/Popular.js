import React from "react";
import { posts } from "../../json/hnextAvTitle";
import Star from "../Star";
import Link from "next/link";
import Image from "next/image";

const Popular = () => {
  posts.sort(function (a, b) {
    if (a.stars < b.stars) return 1;
    if (a.stars > b.stars) return -1;
    return 0;
  });

  const popular_list = [];

  for (let i = 0; i < 10; i++) {
    popular_list.push(posts[i]);
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
      {popular_list.map((pl) => {
        return (
          <div className="mt-4 font-sans" key={pl.pageUrl}>
            <Link href={`/posts/${pl.pageUrl}`} passHref>
              <a>
                <Image
                  className="hover:opacity-90 transition cursor-pointer"
                  src={pl.avImg}
                  alt={pl.avTitle}
                  width={1088}
                  height={612}
                  layout={"responsive"}
                />
              </a>
            </Link>
            <div className="truncate pt-3 pb-1">
              <Link href={`/posts/${pl.pageUrl}`} passHref>
                <a>
                  <h3 className="text-sm hover:opacity-90">{pl.avTitle}</h3>
                </a>
              </Link>
            </div>
            <div className="py-1">
              <Star star={pl.stars} />
            </div>
            <div className="text-sm pt-3">
              {pl.ondemand == "見放題" ? (
                <span className="bg-blue-500 text-white py-1 px-3 mr-2 rounded">
                  {pl.ondemand}
                </span>
              ) : (
                <span className="bg-gray-400 text-white py-1 px-3 mr-2 rounded">
                  {pl.ondemand}
                </span>
              )}
              {pl.money != "Nodata" && `${pl.money}`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
