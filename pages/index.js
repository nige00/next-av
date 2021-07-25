import Layout from "../components/Layout";
import { koteibun } from "../json/koteibun";
import Popular from "../components/atoms/Popular";
import JoyuP from "../components/atoms/JoyuP";
import KantokuP from "../components/atoms/KantokuP";
import JanruP from "../components/atoms/JanruP";
import SeriesP from "../components/atoms/SeriesP";
import MakerP from "../components/atoms/MakerP";

const Home = () => {
  // 評価順に並び替え

  return (
    <Layout
      title={`${koteibun.date}${koteibun.next}のおすすめアダルトビデオ配信状況まとめ`}
      description={`${koteibun.date}${koteibun.next}で見れる、アダルトビデオ配信状況をまとめました。見放題やポイント購入か、また評価などを掲載。みたいAVが見れるか見れないか知りたいときにご利用ください。`}
      keyword={koteibun.keyword}
      image={""}
      url={`${koteibun.domain}/`}
      type={"website"}
    >
      <div className="flex flex-1 justify-center items-center flex-col font-sans">
        <h1 className="text-2xl py-4">{`${koteibun.date}${koteibun.next}のアダルトビデオ配信状況まとめ`}</h1>
        <div>
          <p className="text-gray-400">{koteibun.teikei}</p>
        </div>

        <div className="py-4">
          <h2 className="text-xl">人気女優の作品</h2>
          <JoyuP data={10} />
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
        <div className="py-4">
          <h2 className="text-xl">人気ジャンルの作品</h2>
          <JanruP data={4} />
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
        <div className="py-4">
          <h2 className="text-xl">人気監督の作品</h2>
          <KantokuP data={10} />
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
        <div className="py-4">
          <h2 className="text-xl">人気シリーズの作品</h2>
          <SeriesP data={10} />
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
        <div className="py-4">
          <h2 className="text-xl">人気メーカーの作品</h2>
          <MakerP data={10} />
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
        <div className="py-4">
          <h2 className="text-xl">現在人気の作品</h2>
          <Popular />
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
      </div>
    </Layout>
  );
};

export default Home;
