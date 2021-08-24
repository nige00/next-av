import { series } from "../json/series";
import Link from "next/link";

const AvData = ({ data }) => {
  let y = series.find((elem) => {
    if (elem.seriesName == data) {
      return elem;
    }
  });

  return (
    <span className="pr-1">
      {data != "Nodata" ? (
        <Link href={`/tags4/${y.pageUrl}`}>
          <a className="cursor-pointer hover:text-gray-400 transition">
            {data != "Nodata" ? data : "---"}{" "}
          </a>
        </Link>
      ) : (
        <a className="">{data != "Nodata" ? data : "---"} </a>
      )}
    </span>
  );
};

export default AvData;
