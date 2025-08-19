import React, { useState } from "react";



export default function Header({ onBookClick }) { // Receive onBookClick prop
  const [navOpen, setNavOpen] = useState(false); 

  return (
    <>
      <header className="header">

        <div className="header-top">
          <div className="container">
            <ul className="contact-list">
              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:info@example.com" className="contact-link">
                  info@example.com
                </a>
              </li>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+917052101786" className="contact-link">
                  +91-7052-101-786
                </a>
              </li>
            </ul>


            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>



        <div className="header-bottom" data-header>
          <div className="container">
            <a href="#" className="logo">
              Dentelo.
            </a>

            {/* 👇 Add conditional "active" class for mobile menu */}
            <nav className={`navbar container ${navOpen ? "active" : ""}`} data-navbar>
              <ul className="navbar-list">
                <li>
                  <a
                    href="#home"
                    className="navbar-link"
                    data-nav-link
                    onClick={() => setNavOpen(false)} // close menu on click
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#bookings-section"
                    className="navbar-link"
                    data-nav-link
                    onClick={() => setNavOpen(false)}
                  >
                    My Bookings
                  </a>
                </li>
                <li>
                  <a
                    href="#service"
                    className="navbar-link"
                    data-nav-link
                    onClick={() => setNavOpen(false)}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="navbar-link"
                    data-nav-link
                    onClick={() => setNavOpen(false)}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="navbar-link"
                    data-nav-link
                    onClick={() => setNavOpen(false)}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="navbar-link"
                    data-nav-link
                    onClick={() => setNavOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Use the onBookClick prop from App.jsx */}
            <button onClick={onBookClick} className="btn">
              Book appointment
            </button>

            {/* 👇 Toggle button updates navOpen */}
            <button
              className="nav-toggle-btn"
              aria-label="Toggle menu"
              onClick={() => setNavOpen(!navOpen)}
            >
              <ion-icon
                name={navOpen ? "close-sharp" : "menu-sharp"}
                aria-hidden="true"
                className="menu-icon"
              ></ion-icon>
            </button>
          </div>
        </div>
      </header>


      {/* REMOVED FORM RENDERING - Now handled in App.jsx */}
    </>
  );
}