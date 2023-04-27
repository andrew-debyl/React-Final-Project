import React from "react";
import "./Header.css";

function Header({bool}) {
  return (
    <div>
      <section id={bool ? `nav__bar-purple` : `nav__bar`}>
        <nav class="nav__container">
          <div class="nav__headers">
            <h3 class={bool ? `nav__header--logo-purple` : `nav__header--logo`}>FilmFinder</h3>
            <ul class="nav__header--list">
              <li class="nav__header--link">
                <a href="#" class={bool ? `nav__header--item-purple` : `nav__header--item`}>
                  Home
                </a>
              </li>
              <li class="nav__header--link">
                <a href="#" class={bool ? `nav__header--item-purple` : `nav__header--item`}>
                  Find your movies
                </a>
              </li>
              <li class={bool ? `nav-contact-purple` : `nav-contact`}>
                <a
                  href="#"
                  class={bool ? `nav-contact--link-purple` : `nav-contact--link`}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
