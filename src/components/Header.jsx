import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ bool }) {
  return (
    <div>
      <section id={bool ? `nav__bar-purple` : `nav__bar`}>
        <nav className="nav__container">
          <div className="nav__headers">
            <Link to="/" className="link--tag">
              <h3
                className={
                  bool ? `nav__header--logo-purple` : `nav__header--logo`
                }
              >
                FilmFinder
              </h3>
            </Link>
            <ul className="nav__header--list">
              <li className="nav__header--link">
                <Link to="/" className="link--tag">
                  <h3
                    className={
                      bool ? `nav__header--item-purple` : `nav__header--item`
                    }
                  >
                    Home
                  </h3>
                </Link>
              </li>
              <li className="nav__header--link">
                <Link to="/search" className="link--tag">
                  <h3
                    className={
                      bool ? `nav__header--item-purple` : `nav__header--item`
                    }
                  >
                    Find your movies
                  </h3>
                </Link>
              </li>
              <li className={bool ? `nav-contact-purple` : `nav-contact`}>
                <h3
                  className={
                    bool ? `nav-contact--link-purple` : `nav-contact--link`
                  }
                >
                  CONTACT
                </h3>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
