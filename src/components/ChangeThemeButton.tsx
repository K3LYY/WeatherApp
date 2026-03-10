import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../App.css';
import slonce from '../../public/sunny.png';
import ksiezyc from '../../public/moon.png';

const ChangeThemeButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        toggleTheme();
        console.log(isDark);
      }}
      className="h-11 w-10 float-right"
    >
      {isDark ? <img src={slonce} /> : <img src={ksiezyc} />}
    </button>
  );
};

export default ChangeThemeButton;
