import TimeClock from '../components/TimeClock';
import WeatherIcon from '../components/WeatherIcon';
import WeatherApi from '../WeatherInstanceApi';
import { useContext, useEffect, useState } from 'react';
import { CityContext } from '../contexts/CityContext';
import SunTime from '../components/SunTime';
import WeatherDetails from '../components/WeatherDetails';

const WeatherPage = () => {
  const { city, lon, lat } = useContext(CityContext);
  const [icon, setIcon] = useState<string>('10d');
  const [temperature, setTemperature] = useState<number>();
  const [sunrise, setSunrise] = useState<number>(0);
  const [sunset, setSunset] = useState<number>(0);
  const [windSpeed, setWindSpeed] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [visibility, setVisibility] = useState<number>(0);
  const [pressure, setPressure] = useState<number>(0);
  const [cloudiness, setCloudiness] = useState<number>(0);
  const [feelsLike, setFeelsLike] = useState<number>(0);
  console.log(city);
  console.log(lat);
  console.log(lon);

  const getWeatherData = async () => {
    try {
      const response = await WeatherApi.get(
        `/data/2.5/weather?lat=${lat}&lon=${lon}`,
      );
      console.log(response);
      setIcon(response.data.weather[0].icon);
      setTemperature(Math.round(response.data.main.temp - 273.15));
      setSunrise(response.data.sys.sunrise);
      setSunset(response.data.sys.sunset);
      setWindSpeed(response.data.wind.speed);
      setHumidity(response.data.main.humidity);
      setVisibility(response.data.visibility);
      setPressure(response.data.main.pressure);
      setFeelsLike(Math.round(response.data.main.feels_like - 273.15));
      setCloudiness(response.data.clouds.all);
    } catch (error) {
      console.log(error);
    } finally {
      //setLoader(false)
    }
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="page">
      WeatherPage
      <h1>{city}</h1>
      <TimeClock />
      <WeatherIcon iconId={icon} />
      <h1>{temperature}°C</h1>
      <br />
      <SunTime SunRiseTimeStamp={sunrise} SunSetTimeStamp={sunset} />
      <br />
      <WeatherDetails
        windSpeed={windSpeed}
        cloudiness={cloudiness}
        humidity={humidity}
        pressure={pressure}
        visibility={visibility}
        feelsLike={feelsLike}
      />
    </div>
  );
};

export default WeatherPage;
