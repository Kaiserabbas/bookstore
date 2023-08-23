import { NavLink } from 'react-router-dom';
import profile from '../assets/profile.png';
import './css/Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="store-name">
        <p>Bookstore CMS</p>
      </div>
      <ul className="navlist">
        <li className="nav-item">
          <NavLink className="books" to="/">
            BOOKS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="catagories" to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <div className="images">
        <img className="profile" src={profile} alt="profile" />
      </div>
    </nav>
  );
}
export default Nav;
