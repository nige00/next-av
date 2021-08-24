import Layout from "../../components/Layout";
import { posts } from "../../json/hnextAvTitle";
import Image from "next/image";
import JoyuData from "../../components/JoyuData";
import KantokuData from "../../components/KantokuData";
import JanruData from "../../components/JanruData";
import SeriesData from "../../components/SeriesData";
import MakerData from "../../components/MakerData";

import { koteibun } from "../../json/koteibun";

import Star from "../../components/Star";

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout
      title={`${koteibun.date}${koteibun.next}で見れる？『${post.avTitle}』の配信状況`}
      description={`${koteibun.date}${koteibun.next}で『${post.avTitle}』は見れる？見たいAVが見れるか見れないか知りたいときにご利用ください。`}
      keyword={koteibun.keyword}
      image={post.avImg}
      url={`${koteibun.domain}/posts/${post.pageUrl}`}
      type={"article"}
    >
      <div>
        <h1 className="sm:text-2xl sm:font-mono font-serif text-xl py-4">{`${koteibun.date}${koteibun.next}で見れる？『${post.avTitle}』の配信状況`}</h1>
        <div className="py-6 pt-3">
          <a
            href={koteibun.u_link}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <span className="bg-pink-500 hover:bg-pink-400 rounded text-white py-2 px-6 cursor-pointer">
              U-NEXTで配信中！
            </span>
          </a>
        </div>
      </div>
      <div className="font-sans">
        <div className="m-auto">
          <a
            href={koteibun.u_link}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <Image
              className="hover:opacity-90 transition cursor-pointer"
              src={post.avImg}
              alt={post.avTitle}
              width={1088}
              height={612}
              layout={"responsive"}
            />
          </a>
        </div>
        {post.stars == 5 && (
          <div className="flex flex-col items-center justify-center py-8">
            <a
              className="transition cursor-pointer hover:bg-gray-500 hover:text-white"
              href={koteibun.u_link}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <p className=" border-2 sm:px-16 sm:py-6 sm:text-normal text-center text-sm px-9 py-3 border-gray-500">
                【最大評価】のおすすめ作品です、見るか見ないかは自由です。
              </p>
            </a>
          </div>
        )}
        <div className="sm:flex sm:flex-1">
          <div className="sm:w-1/2 sm:p-4">
            <h2 className="text-xl">作品内容</h2>
            <p className="leading-relaxed py-6">{post.desc}</p>
          </div>
          <div className="sm:w-1/2 sm:p-4">
            <h2 className="text-xl">U-NEXTの配信データ</h2>
            <div className="grid grid-cols-2 gap-y-2 py-4">
              <div className="border-b py-2 border-gray-300">
                <span>評価</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                <Star star={post.stars} />
              </div>
              <div className="border-b py-2 border-gray-300">
                <span className="font-bold">視聴方法</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                <span className="pr-1 font-bold">
                  {post.ondemand}
                  {post.money != "Nodata" && `：${post.money}`}
                </span>
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>配信開始日</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {" "}
                <span className="pr-1">{post.startDate}</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>出演女優</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {post.joyu &&
                  post.joyu.map((data) => <JoyuData key={data} data={data} />)}
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>監督</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {post.kantoku &&
                  post.kantoku.map((data) => (
                    <KantokuData key={data} data={data} />
                  ))}
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>ジャンル</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {post.janru &&
                  post.janru.map((data) => (
                    <JanruData key={data} data={data} />
                  ))}
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>シリーズ</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {post.sirizu &&
                  post.sirizu.map((data) => (
                    <SeriesData key={data} data={data} />
                  ))}
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>メーカー</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {post.meka &&
                  post.meka.map((data) => <MakerData key={data} data={data} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-4 py-4">
          <p>{koteibun.teikei}</p>
        </div>
        <div className="sm:px-4 py-4 text-xs text-gray-400">
          {"データ取得日："}
          {post.date}
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer py-4">
          <span className="text-sm py-1">{koteibun.micro_copy}</span>
          <a
            className="bg-pink-500 text-xl text-white px-8 py-3 rounded hover:bg-pink-400 transition"
            href={koteibun.u_link}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            U-NEXTで視聴する
          </a>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => {
    return {
      params: {
        pageUrl: String(post.pageUrl),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find(function (post) {
    return post.pageUrl === params.pageUrl;
  });

  return {
    props: {
      post,
      posts,
    },
  };
}
