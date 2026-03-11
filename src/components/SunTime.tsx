interface ISunTime {
  SunRiseTimeStamp: number;
  SunSetTimeStamp: number;
}

const SunTime = ({ SunRiseTimeStamp, SunSetTimeStamp }: ISunTime) => {
  const SunRiseTime = new Date(SunRiseTimeStamp * 1000).toLocaleTimeString();
  const SunSetTime = new Date(SunSetTimeStamp * 1000).toLocaleTimeString();
  return (
    <div className="block place-content-evenly">
      <div>Wschód: {SunRiseTime}</div>
      <div>Zachód: {SunSetTime}</div>
    </div>
  );
};

export default SunTime;
