import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../App.css';

const ChangeThemeButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        toggleTheme();
        console.log(isDark);
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ChangeThemeButton;
