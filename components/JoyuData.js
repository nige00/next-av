import { joyus } from "../json/joyus";
import Link from "next/link";

const AvData = ({ data }) => {
  let y = joyus.find((elem) => {
    if (elem.joyuName == data) {
      return elem;
    }
  });

  return (
    <span className="pr-1">
      {data != "Nodata" ? (
        <Link href={`/tags/${y.pageUrl}`}>
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
