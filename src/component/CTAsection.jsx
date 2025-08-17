import React from "react";

export default function CTAsection({ onBookClick }) {
  return (
    <section className="section cta" aria-label="cta">
      <div className="container">
        <figure className="cta-banner">
          <img
            src="./assets/images/cta-banner.png"
            width="1056"
            height="1076"
            loading="lazy"
            alt="cta banner"
            className="w-100"
          />
        </figure>

        <div className="cta-content">
          <p className="section-subtitle">Book Dental Appointment</p>
          <h2 className="h2 section-title">
            We Are Open And Welcoming Patients
          </h2>
          <button onClick={onBookClick} className="btn">
            Book appointment
          </button>
        </div>
      </div>
    </section>
  );
}
