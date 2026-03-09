// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import WeatherPage from './pages/WeatherPage';
import HomePage from './pages/HomePage';
import AirQualityPage from './pages/AirQualityPage';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="pogoda" element={<WeatherPage />} />
            <Route path="powietrze" element={<AirQualityPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>,
  );
}
