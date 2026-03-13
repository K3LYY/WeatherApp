import { createContext, useState, useEffect } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

interface ICityContext {
  children: ReactNode;
}

type TCityData = {
  city: string;
  lon: string;
  lat: string;
};

export const CityContext = createContext<{
  city: string;
  lon: string;
  lat: string;
  setCityData: Dispatch<SetStateAction<TCityData>>;
  favourites: TCityData[];
  setFavourites: Dispatch<SetStateAction<TCityData[]>>;
  isInFavourite: boolean;
  addToFavourites: () => void;
  removeFromFavourite: () => void;
}>({
  city: 'Warszawa',
  lon: '21.0067249',
  lat: '52.2319581',
  setCityData: () => {},
  favourites: [],
  setFavourites: () => {},
  isInFavourite: false,
  addToFavourites: () => {},
  removeFromFavourite: () => {},
});

export const CityProvider = ({ children }: ICityContext) => {
  const [cityData, setCityData] = useState({
    city: localStorage.getItem('city') ?? 'Warszawa',
    lon: localStorage.getItem('lon') ?? '21.0067249',
    lat: localStorage.getItem('lat') ?? '52.2319581',
  });
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favourites') ?? '[]');
    } catch {
      return [];
    }
  });
  const isInFavourite = !!favourites.filter(
    (favCity: TCityData) => favCity.city === cityData.city,
  ).length;

  const addToFavourites = () => {
    setFavourites((prev: TCityData[]) => [...prev, cityData]);
  };

  const removeFromFavourite = () => {
    setFavourites((prev: TCityData[]) =>
      prev.filter((favCity: TCityData) => favCity.city !== cityData.city),
    );
  };

  useEffect(() => {
    localStorage.setItem('city', cityData.city);
    localStorage.setItem('lon', cityData.lon);
    localStorage.setItem('lat', cityData.lat);
  }, [cityData]);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  return (
    <CityContext
      value={{
        ...cityData,
        setCityData,
        favourites,
        setFavourites,
        isInFavourite,
        addToFavourites,
        removeFromFavourite,
      }}
    >
      {children}
    </CityContext>
  );
};
