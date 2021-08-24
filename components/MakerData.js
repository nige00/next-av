import { makers } from "../json/makers";
import Link from "next/link";

const AvData = ({ data }) => {
  let y = makers.find((elem) => {
    if (elem.makerName == data) {
      return elem;
    }
  });

  return (
    <span className="pr-1">
      {data != "Nodata" ? (
        <Link href={`/category/${y.pageUrl}`}>
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
