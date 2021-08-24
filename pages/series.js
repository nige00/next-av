import { series } from "../json/series";
import { koteibun } from "../json/koteibun";
import Layout from "../components/Layout";
import Link from "next/link";

const serieslist = () => {
  return (
    <Layout
      title={`${koteibun.date}${koteibun.next}で見れるAVシリーズ一覧`}
      description={`${koteibun.date}${koteibun.next}で見れるAVシリーズ作品まとめ。アダルトビデオは見放題？見たいAVが見れるか見れないか知りたいときにご利用ください。`}
      keyword={koteibun.keyword}
      image={""}
      url={`${koteibun.domain}/series`}
      type={"article"}
    >
      <div>
        <h1 className="sm:text-2xl sm:font-mono font-serif text-xl py-4 pt-8">{`${koteibun.date}${koteibun.next}で見れるAVシリーズ一覧`}</h1>
      </div>
      <div className="sm:px-4 py-4 font-sans">
        <p>{koteibun.teikei}</p>
      </div>
      {
        <div className="font-sans mt-10">{`シリーズ数：${series.length}件`}</div>
      }
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
      <ul className="mt-10">
        {series.map((elem) => {
          return (
            <Link key={elem.pageUrl} href={`/tags4/${elem.pageUrl}`} passHref>
              <a className="">
                <li className="my-2">
                  <span className="border-b text-blue-500 border-blue-400 hover:opacity-80">
                    {elem.seriesName}
                  </span>
                </li>
              </a>
            </Link>
          );
        })}
      </ul>
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
};

export default serieslist;
