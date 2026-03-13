import CityUserInput from '../components/CityUserInput';
import WeatherSupplierText from '../components/WeatherSupplierText';
import FavoritesList from '../components/FavoritesList';

const HomePage = () => {
  return (
    <div className="page">
      <h1>Sprawdź pogodę w swoim mieście</h1>
      <br />
      <CityUserInput />
      <WeatherSupplierText />
      <br />
      <FavoritesList />
    </div>
  );
};

export default HomePage;
