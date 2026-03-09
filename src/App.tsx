import './App.css';
import ChangeThemeButton from './components/ChangeThemeButton';
import { Outlet, NavLink } from 'react-router';

const App = () => {
  return (
    <div className="content">
      <nav>
        <ChangeThemeButton />
        <NavLink to="/" end>
          <button>Strona główna</button>
        </NavLink>
        <NavLink to="pogoda" end>
          <button>Aktualna pogoda</button>
        </NavLink>
        <NavLink to="powietrze" end>
          <button>Jakość powietrza</button>
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;
