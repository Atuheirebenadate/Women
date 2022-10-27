import React from 'react';
import NavComponent from './Navbar';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <div>
      <div className="navbarFirst">
        <a className="navbar-title" href="/">
          <h1>
            <img src={Logo} alt="" width="70px" />
          </h1>
        </a>
      </div>
      <NavComponent />
    </div>
  );
};

export default Header;
