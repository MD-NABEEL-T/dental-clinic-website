import React, { useState } from "react";
import Appointmentform from "./Appointmentform";

export default function Header() {
  const [showForm, setShowForm] = useState(false);

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

            <nav className="navbar container" data-navbar>
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#bookings-section" className="navbar-link" data-nav-link>
                    My Bookings
                    </a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#footer" className="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Open form when clicked */}
            <button onClick={() => setShowForm(true)} className="btn">
              Book appointment
            </button>

            <button
              className="nav-toggle-btn"
              aria-label="Toggle menu"
              data-nav-toggler
            >
              <ion-icon
                name="menu-sharp"
                aria-hidden="true"
                className="menu-icon"
              ></ion-icon>
              <ion-icon
                name="close-sharp"
                aria-hidden="true"
                className="close-icon"
              ></ion-icon>
            </button>
          </div>
        </div>
      </header>

      {/* Render Appointmentform conditionally */}
      {showForm && <Appointmentform onClose={() => setShowForm(false)} />}
    </>
  );
}
