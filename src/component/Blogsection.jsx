import React from "react";

export default function BlogSection() {
  return (
    <section className="section blog" id="blog"aria-label="blog">
      <div className="container">
        <p className="section-subtitle text-center">Latest Blog & News</p>

        <h2 className="h2 section-title text-center">Latest Blog & News</h2>

        <ul className="blog-list">
          {/* Blog Item 1 */}
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/blog-1.jpg"
                  width="350"
                  height="250"
                  loading="lazy"
                  alt="Blog 1"
                  className="img-cover"
                />
                <div className="card-badge">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <time dateTime="2022-03-24">24th March 2022</time>
                </div>
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Cras accumsan nulla nec lacus ultricies placerat.
                  </a>
                </h3>
                <p className="card-text">
                  Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                  dignissim ligula, nec tristique orci.
                </p>
              </div>
            </div>
          </li>

          {/* Blog Item 2 */}
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/blog-2.jpg"
                  width="350"
                  height="250"
                  loading="lazy"
                  alt="Blog 2"
                  className="img-cover"
                />
                <div className="card-badge">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <time dateTime="2022-03-24">24th March 2022</time>
                </div>
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Vestibulum ante ipsum primis in faucibus.
                  </a>
                </h3>
                <p className="card-text">
                  Suspendisse potenti. Quisque in lacus eu turpis molestie
                  feugiat.
                </p>
              </div>
            </div>
          </li>

          {/* Blog Item 3 */}
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/blog-3.jpg"
                  width="350"
                  height="250"
                  loading="lazy"
                  alt="Blog 3"
                  className="img-cover"
                />
                <div className="card-badge">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <time dateTime="2022-03-24">24th March 2022</time>
                </div>
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Quisque egestas ipsum eu purus.
                  </a>
                </h3>
                <p className="card-text">
                  Praesent sed quam nec sapien malesuada lacinia in nec est.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
