import { useContext } from 'react';
import { CityContext } from '../contexts/CityContext';
import { useNavigate } from 'react-router';

const LocalizationButton = () => {
  const { setCityData } = useContext(CityContext);
  const navigate = useNavigate();
  const checkGeoLocalization = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCityData((prev) => ({
        ...prev,
        lon: coords.longitude.toString(),
        lat: coords.latitude.toString(),
      }));
      navigate('/pogoda');
    });
  };
  return (
    <button className="inputBtn" onClick={checkGeoLocalization}>
      🌐
    </button>
  );
};

export default LocalizationButton;
