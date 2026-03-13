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
}>({
  city: 'Warszawa',
  lon: '21.0067249',
  lat: '52.2319581',
  setCityData: () => {},
});

export const CityProvider = ({ children }: ICityContext) => {
  const [cityData, setCityData] = useState({
    city: localStorage.getItem('city') ?? 'Warszawa',
    lon: localStorage.getItem('lon') ?? '21.0067249',
    lat: localStorage.getItem('lat') ?? '52.2319581',
  });

  useEffect(() => {
    localStorage.setItem('city', cityData.city);
    localStorage.setItem('lon', cityData.lon);
    localStorage.setItem('lat', cityData.lat);
  }, [cityData]);

  return (
    <CityContext value={{ ...cityData, setCityData }}>{children}</CityContext>
  );
};
