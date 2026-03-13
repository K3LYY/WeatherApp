import starFull from '../../public/starFull.png';
import starEmpty from '../../public/starEmpty.png';
import { useContext } from 'react';
import { CityContext } from '../contexts/CityContext';

const FavouriteButton = () => {
  const { isInFavourite, addToFavourites, removeFromFavourite } =
    useContext(CityContext);
  console.log(isInFavourite);

  return (
    <button
      onClick={() => {
        isInFavourite ? removeFromFavourite() : addToFavourites();
      }}
    >
      <img
        src={isInFavourite ? starFull : starEmpty}
        className="w-10 h-10"
      ></img>
    </button>
  );
};

export default FavouriteButton;
