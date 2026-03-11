interface IWeatherDetails {
  windSpeed: number;
  humidity: number;
  visibility: number;
  pressure: number;
  cloudiness: number;
  feelsLike: number;
}

const WeatherDetails = ({
  windSpeed,
  humidity,
  visibility,
  pressure,
  cloudiness,
  feelsLike,
}: IWeatherDetails) => {
  return (
    <div className="place-content-evenly justify-center flex-wrap grid grid-cols-3 grid-rows-2">
      <div className="detal">
        <span>
          Wiatr <br /> {windSpeed} m/s
        </span>
      </div>
      <div className="detal">
        <span>
          Wilgotność
          <br /> {humidity} %
        </span>
      </div>
      <div className="detal">
        <span>
          Widoczność <br />
          {visibility} km
        </span>
      </div>
      <div className="detal">
        <span>
          Ciśnienie
          <br />
          {pressure} hPa
        </span>
      </div>
      <div className="detal">
        <span>
          Zachmurzenie
          <br />
          {cloudiness} %
        </span>
      </div>
      <div className="detal">
        <span>
          Odczuwalna
          <br />
          {feelsLike}°C
        </span>
      </div>
    </div>
  );
};

export default WeatherDetails;
