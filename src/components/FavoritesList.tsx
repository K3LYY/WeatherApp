import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CityContext } from '../contexts/CityContext';

const FavoritesList = () => {
  const { favourites, setCityData } = useContext(CityContext);
  const navigate = useNavigate();

  if (favourites.length === 0) {
    return null;
  }
  return (
    <div>
      <h1>Ulubione miasta</h1>
      <ul className="flex flex-col items-center">
        {favourites.map((fav, index) => (
          <li key={index} className="max-w-3xl w-full">
            <button
              className="w-full h-full"
              onClick={() => {
                setCityData(fav);
                navigate('/pogoda');
              }}
            >
              {fav.city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
