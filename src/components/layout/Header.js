import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/Home" className="navbar-brand">
              Aram Kim
            </Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/Home" className="navbar-brand">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="navbar-brand">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Contact" className="navbar-brand">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
