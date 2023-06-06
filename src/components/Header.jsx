import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div
        data-headercontainer="zptheme-data-headercontainer"
        className="zpheader-style-01 theme-header-fixed"
        // data-headercontainer="zptheme-data-headercontainer"
      >
        <div
          className="theme-header"
          data-header="zptheme-data-header-transparent"
          data-dark-part-applied="false"
          data-banner-base-header="theme-banner-base-header"
        >
          <div className="zpcontainer">
            <div
              className="theme-branding-info"
              data-theme-branding-info="zptheme-branding-info"
            >
              <div className="theme-logo-parent">
                <img
                  src="https://senchola.com/wp-content/uploads/2022/12/Senchola-logo-02-01-1.png"
                  style={{ objectFit: "cover" }}
                  alt="Senchola Logo"
                />
              </div>
            </div>
            <div className="theme-navigation-and-icons">
              <div
                className="theme-menu-area"
                data-zp-nonresponsive-container="mymenu1"
              >
                <div
                  className="theme-menu"
                  data-non-res-menu="zptheme-menu-non-res"
                  data-zp-theme-menu="id: mymenu1 ;active: theme-menu-selected; maxitem:5;position: theme-sub-menu-position-change; orientation: horizontal; submenu: theme-sub-menu; moretext: More; nonresponsive-icon-el: theme-non-responsive-menu; responsive-icon-el: theme-responsive-menu; burger-close-icon: theme-close-icon; animate-open: theme-toggle-animate; animate-close: theme-toggle-animate-end;open-icon: theme-submenu-down-arrow; close-icon: theme-submenu-up-arrow; root-icon: theme-submenu-down-arrow; subtree-icon: theme-submenu-right-arrow;"
                >
                  <ul>
                    <li>
                      <Link to="/" className="link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="link">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/src/components/About.jsx" className="link">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/src/components/Candiadteserver.jsx" className="link">
                        Candidates
                      </Link>
                    </li>
                    <li>
                      <Link to="/registration" className="link">
                        Registration
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div
                    data-zp-submenu-icon="mymenu1"
                    style={{ display: "none" }}
                  >
                    <span className="theme-sub-li-menu theme-non-responsive-menu"></span>
                    <span className="theme-sub-li-menu theme-responsive-menu theme-submenu-down-arrow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="theme-responsive-menu-area theme-navigation-and-icons zpcontainer">
            <div
              className="theme-responsive-menu-container"
              data-zp-burger-clickable-area="mymenu1"
            >
              <span
                className="theme-burger-icon"
                data-zp-theme-burger-icon="mymenu1"
              ></span>
            </div>
            <div
              className="theme-responsive-menu theme-menu-area"
              data-zp-responsive-container="mymenu1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;