import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to="/create_new_hero" className="nav-link">
              Create a hero
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
