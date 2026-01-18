import "./Navbar.css";

import { Link } from "react-router-dom";
import assets from "../../assets/assets";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <img src={assets.logo} alt="Company Logo" />
        </div>

        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;