import React from "react";

const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-brand" href="#"></div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#id-features">
                Features
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Components
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    GSM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Arduino
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Breadboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    GPS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Arduino buzzer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LED
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#id-best">
                Best Collections
              </a>
            </li>
            <li className="nav-item">
              {/* <!-- <a className="nav-link" href="#">Our</a> --> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#id-works">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#id-meetus">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#id-infor">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div className="navButtons">
              <a href="./" />
            </div>

            <a href="./">
              <div className="navB1">
                <i className="fas fa-shopping-cart"></i>
                <p className="cartNum">0</p>
              </div>
            </a>
          </div>
        </div>{' '}
      </div>
    </nav>
  );
};

export default NavComponent;
