import React from "react";

export default function Doctorsection() {
  return (
    <section className="section doctor" aria-label="doctor">
      <div className="container">

        <p className="section-subtitle text-center">Our Doctor</p>
        <h2 className="h2 section-title text-center">Best Expert Dentist</h2>

        <ul className="has-scrollbar">
          {[
            { img: "/assets/images/doctor-1.png", name: "Howard Holmes", role: "Dentist" },
            { img: "/assets/images/doctor-2.png", name: "Ella Thompson", role: "Dentist" },
            { img: "/assets/images/doctor-3.png", name: "Vincent Cooper", role: "Dentist" },
            { img: "/assets/images/doctor-4.png", name: "Danielle Bryant", role: "Dentist" },
          ].map((doc, i) => (
            <li className="scrollbar-item" key={i}>
              <div className="doctor-card">
                <div className="card-banner img-holder" style={{ "--width": 460, "--height": 500 }}>
                  <img
                    src={doc.img}
                    width="460"
                    height="500"
                    loading="lazy"
                    alt={doc.name}
                    className="img-cover"
                  />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">{doc.name}</a>
                </h3>

                <p className="card-subtitle">{doc.role}</p>

                <ul className="card-social-list">
                  <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                  <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                  <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                </ul>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
