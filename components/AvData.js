const AvData = ({ data }) => {
  return <span className="pr-2">{data != "Nodata" ? data : "---"}</span>;
};

export default AvData;
