import React from "react";

function Navbar() {
  return (
    <nav className="navbar is-transparent is-fixed-top is-mobile">
      <div className="navbar-brand is-mobile">
        <div
          className="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div
        id="navbarExampleTransparentExample "
        className="navbar-menu is-size-5 has-text-weight-bold is-mobile"
      >
        <div className="navbar-start is-mobile">
          <a
            className="navbar-item"
            style={{ color: "rgb(0, 0, 0)" }}
            href="#home"
          >
            Home
          </a>
          <a
            className="navbar-item"
            style={{ color: "rgb(0, 0, 0)" }}
            href="#introduction"
          >
            Introduction
          </a>
          <a
            className="navbar-item"
            style={{ color: "rgb(0, 0, 0)" }}
            href="#qualifications"
          >
            Qualifications
          </a>
          <a
            className="navbar-item"
            style={{ color: "rgb(0, 0, 0)" }}
            href="#myprojects"
          >
            My Projects
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a
              className="navbar-link"
              style={{ color: "rgb(0, 0, 0)" }}
              href="#contact"
            >
              Contact
            </a>
            <div className="navbar navbar-dropdown is-boxed">
              <a
                className="navbar-item"
                style={{ color: "rgb(0, 0, 0)" }}
                href="https://www.facebook.com/"
              >
                Facebook
              </a>
              <a
                className="navbar-item"
                style={{ color: "rgb(0, 0, 0)" }}
                href="https://www.fiverr.com/"
              >
                Fiverr
              </a>
              <a
                className="navbar-item"
                style={{ color: "rgb(0, 0, 0)" }}
                href="https://mail.google.com/"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
