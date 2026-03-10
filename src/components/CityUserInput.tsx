import { useState } from 'react';
import LocalizationButton from './LocalizationButton';
import { useNavigate } from 'react-router';
import WeatherApi from '../WeatherInstanceApi';

const CityUserInput = () => {
  const [userInput, setUserInput] = useState<string>('');
  const navigate = useNavigate();

  const getGeoData = async () => {
    //setLoader(true)
    try {
      const response = await WeatherApi.get(`/geo/1.0/direct?q=${userInput}`);
      console.log(response);
      navigate(
        `/pogoda?lat=${response.data[0].lat}&lon=${response.data[0].lon}`,
      );
    } catch (error) {
      console.log(error);
    } finally {
      //setLoader(false)
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Wpisz nazwę miasta..."
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></input>
      <button type="button" className="inputBtn" onClick={getGeoData}>
        🔍
      </button>
      <LocalizationButton />
    </div>
  );
};

export default CityUserInput;
