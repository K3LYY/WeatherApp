import { useSearchParams } from 'react-router';
import WeatherInstanceApi from '../WeatherInstanceApi';

const WeatherPage = () => {
  const [params] = useSearchParams();
  const lat = params.get('lat');
  const lon = params.get('lon');
  // console.log(lon);

  return <div className="page">WeatherPage</div>;
};

export default WeatherPage;
