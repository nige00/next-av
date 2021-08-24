import Layout from "../../components/Layout";
import { posts } from "../../json/hnextAvTitle";
import { joyus } from "../../json/joyus";
import { koteibun } from "../../json/koteibun";
import Link from "next/link";
import Image from "next/image";
import Star from "../../components/Star";

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  // URLに合わせて女優の出演作品を抽出
  let joyumei = posts.filter((item) => {
    if (item.joyu == post.joyuName) {
      return item;
    } else if (item.joyu.length > 1) {
      for (let i = 0; i < item.joyu.length; i++) {
        if (item.joyu[i] == post.joyuName) {
          return item;
        }
      }
    }
  });

  // 評価順に並び替え
  joyumei.sort(function (a, b) {
    if (a.stars < b.stars) return 1;
    if (a.stars > b.stars) return -1;
    return 0;
  });

  const newlist = [];
  if (joyumei.length <= 10) {
    for (let i = 0; i < joyumei.length; i++) {
      newlist.push(joyumei[i]);
    }
  } else {
    for (let i = 0; i < 10; i++) {
      newlist.push(joyumei[i]);
    }
  }

  return (
    <Layout
      title={`${koteibun.date}${koteibun.next}で見れる『${post.joyuName}』出演作品の配信状況一覧`}
      description={`${koteibun.date}${koteibun.next}で見れる${post.joyuName}作品まとめ。アダルトビデオは見放題？見たいAVが見れるか見れないか知りたいときにご利用ください。`}
      keyword={koteibun.keyword}
      image={joyumei[0].avImg}
      url={`${koteibun.domain}/tags/${post.pageUrl}`}
      type={"article"}
    >
      <div>
        <h1 className="sm:text-2xl sm:font-mono font-serif text-xl py-4 pt-8">{`${koteibun.date}${koteibun.next}で見れる『${post.joyuName}』出演作品一覧`}</h1>
      </div>
      <div className="sm:px-4 py-4 font-sans">
        <p>{koteibun.teikei}</p>
      </div>
      {joyumei.length <= 10 && (
        <div className="font-sans">{`作品数：${newlist.length}件`}</div>
      )}
      <div className="flex flex-col items-center justify-center cursor-pointer py-10">
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
        {newlist.map((elem) => {
          return (
            <div className="mt-4 font-sans" key={elem.pageUrl}>
              <Link href={`/posts/${elem.pageUrl}`} passHref>
                <a>
                  <Image
                    className="hover:opacity-90 transition cursor-pointer"
                    src={elem.avImg}
                    alt={elem.avTitle}
                    width={1088}
                    height={612}
                    layout={"responsive"}
                  />
                </a>
              </Link>
              <div className="truncate pt-3 pb-1">
                <Link href={`/posts/${elem.pageUrl}`} passHref>
                  <a>
                    <h2 className="text-sm hover:opacity-90">{elem.avTitle}</h2>
                  </a>
                </Link>
              </div>
              <div className="py-1">
                <Star star={elem.stars} />
              </div>
              <div className="text-sm pt-3">
                {elem.ondemand == "見放題" ? (
                  <span className="bg-blue-500 text-white py-1 px-3 mr-2 rounded">
                    {elem.ondemand}
                  </span>
                ) : (
                  <span className="bg-gray-400 text-white py-1 px-3 mr-2 rounded">
                    {elem.ondemand}
                  </span>
                )}
                {elem.money != "Nodata" && `${elem.money}`}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer py-4 pt-12">
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
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = joyus.map((post) => {
    return {
      params: {
        joyus: String(post.pageUrl),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = joyus.find(function (post) {
    return post.pageUrl === params.joyus;
  });

  return {
    props: {
      post,
      posts,
      joyus,
    },
  };
}
