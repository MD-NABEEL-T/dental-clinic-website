import React from "react";

export default function Servicesection() {
  return (
    <>
      <section
        className="section service"
        id="service"
        aria-label="service"
      >
        <div className="container">
          <p className="section-subtitle text-center">Our Services</p>

          <h2 className="h2 section-title text-center">What We Provide</h2>

          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-icon-1.png"
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="service icon"
                    className="w-100"
                  />
                </div>
                <div>
                  <h3 className="h3 card-title">Root Canal</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum
                    ac.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-icon-2.png"
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="service icon"
                    className="w-100"
                  />
                </div>
                <div>
                  <h3 className="h3 card-title">Alignment Teeth</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum
                    ac.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-icon-3.png"
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="service icon"
                    className="w-100"
                  />
                </div>
                <div>
                  <h3 className="h3 card-title">Cosmetic Teeth</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum
                    ac.
                  </p>
                </div>
              </div>
            </li>

            <li className="service-banner">
              <figure>
                <img
                  src="./assets/images/service-banner.png"
                  width="409"
                  height="467"
                  loading="lazy"
                  alt="service banner"
                  className="w-100"
                />
              </figure>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-icon-4.png"
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="service icon"
                    className="w-100"
                  />
                </div>
                <div>
                  <h3 className="h3 card-title">Oral Hygiene</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum
                    ac.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-icon-5.png"
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="service icon"
                    className="w-100"
                  />
                </div>
                <div>
                  <h3 className="h3 card-title">Live Advisory</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum
                    ac.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-icon-6.png"
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="service icon"
                    className="w-100"
                  />
                </div>
                <div>
                  <h3 className="h3 card-title">Cavity Inspection</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum
                    ac.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
