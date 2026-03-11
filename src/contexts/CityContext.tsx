import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ICityContext {
  children: ReactNode;
}

export const CityContext = createContext<{
  city: string;
  lon: string;
  lat: string;
  setCityData: (input: string, lonInput: string, latInput: string) => void;
}>({
  city: 'Warszawa',
  lon: '21.0067249',
  lat: '52.2319581',
  setCityData: () => {},
});

export const CityProvider = ({ children }: ICityContext) => {
  const [city, setCity] = useState<string>(
    localStorage.getItem('city') ?? 'Warszawa',
  );
  const [lon, setLon] = useState<string>(
    localStorage.getItem('lon') ?? '21.0067249',
  );
  const [lat, setLat] = useState<string>(
    localStorage.getItem('lat') ?? '52.2319581',
  );

  const setCityData = (input: string, lonInput: string, latInput: string) => {
    setCity(input);
    setLat(latInput);
    setLon(lonInput);
    console.log('działają dane');
  };

  useEffect(() => {
    localStorage.setItem('city', city);
    localStorage.setItem('lon', lon);
    localStorage.setItem('lat', lat);
  }, [city, lon, lat]);

  return (
    <CityContext value={{ city, lon, lat, setCityData }}>
      {children}
    </CityContext>
  );
};
