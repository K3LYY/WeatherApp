import './App.css';
import ChangeThemeButton from './components/ChangeThemeButton';
import { Outlet, NavLink } from 'react-router';

//godzina new Date(1661882248*1000).toLocaleTimeString()
const App = () => {
  return (
    <div className="content">
      <nav>
        <NavLink to="/" end>
          <button className="navBtn">Strona główna</button>
        </NavLink>
        <NavLink to="pogoda" end>
          <button className="navBtn">Aktualna pogoda</button>
        </NavLink>
        <NavLink to="powietrze" end>
          <button className="navBtn">Jakość powietrza</button>
        </NavLink>
        <ChangeThemeButton />
      </nav>

      <Outlet />
    </div>
  );
};

export default App;
