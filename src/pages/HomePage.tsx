import CityUserInput from '../components/CityUserInput';
import WeatherSupplierText from '../components/WeatherSupplierText';

const HomePage = () => {
  return (
    <div className="page">
      <h1>Sprawdź pogodę w swoim mieście</h1>
      <br />
      <CityUserInput />
      <WeatherSupplierText />
    </div>
  );
};

export default HomePage;
