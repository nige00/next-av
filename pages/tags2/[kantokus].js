import Layout from "../../components/Layout";
import { posts } from "../../json/hnextAvTitle";
import { kantokus } from "../../json/kantokus";
import { koteibun } from "../../json/koteibun";
import Link from "next/link";
import Image from "next/image";
import Star from "../../components/Star";

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  // URLに合わせて監督作品を抽出
  let kantokumei = posts.filter((item) => {
    if (item.kantoku == post.kantokuName) {
      return item;
    } else if (item.kantoku.length > 1) {
      for (let i = 0; i < item.kantoku.length; i++) {
        if (item.kantoku[i] == post.kantokuName) {
          return item;
        }
      }
    }
  });
  // 評価順に並び替え
  kantokumei.sort(function (a, b) {
    if (a.stars < b.stars) return 1;
    if (a.stars > b.stars) return -1;
    return 0;
  });

  return (
    <Layout
      title={`${koteibun.date}${koteibun.next}で見れる『${post.kantokuName}』監督作品の配信状況一覧`}
      description={`${koteibun.date}${koteibun.next}で見れる${post.joyuName}監督作品まとめ。アダルトビデオは見放題？見たいAVが見れるか見れないか知りたいときにご利用ください。`}
      keyword={koteibun.keyword}
      image={kantokumei[0].avImg}
      url={`${koteibun.domain}/tags2/${post.pageUrl}`}
      type={"article"}
    >
      <div>
        <h1 className="sm:text-2xl sm:font-mono font-serif text-xl py-4 pt-8">{`${koteibun.date}${koteibun.next}で見れる『${post.kantokuName}』監督作品一覧`}</h1>
      </div>
      <div className="sm:px-4 py-4 font-sans">
        <p>{koteibun.teikei}</p>
      </div>
      <div className="font-sans">
        {"作品数："}
        {kantokumei.length}
        {"件"}
      </div>
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
        {kantokumei.map((elem) => {
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
  const paths = kantokus.map((post) => {
    return {
      params: {
        kantokus: String(post.pageUrl),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = kantokus.find(function (post) {
    return post.pageUrl === params.kantokus;
  });

  return {
    props: {
      post,
      posts,
      kantokus,
    },
  };
}