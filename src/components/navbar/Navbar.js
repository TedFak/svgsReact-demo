import { NavLink } from "react-router-dom";
import "./style.css";
import homeLogo from "../../img/logo.png";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo-link">
            <img src={homeLogo} className="home-logo" alt="logo" />
          </NavLink>
          <ul className="nav-list">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li className="nav-list__item">Home</li>
            </NavLink>
            <NavLink
              to="/artists"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li className="nav-list__item">Artists</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li className="nav-list__item">About</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
