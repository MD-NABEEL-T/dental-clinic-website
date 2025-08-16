import { useEffect, useState } from "react";
import "./style.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Herosection from "./component/Herosection";
import Servicesection from "./component/Servicesection"; 
import Aboutsection from "./component/Aboutsection";
import Doctorsection from "./component/Doctorsection";
import CTAsection from "./component/CTAsection";
import Blogsection from "./component/Blogsection";
import AppointmentForm from "./component/Appointmentform";
import Bookingsection from "./component/Bookingsection";

function App() {
  useEffect(() => {
    const addEventOnElem = function (elem, type, callback) {
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          elem[i].addEventListener(type, callback);
        }
      } else {
        elem.addEventListener(type, callback);
      }
    };

    const navbar = document.querySelector("[data-navbar]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const navbarToggler = document.querySelector("[data-nav-toggler]");

    const toggleNav = function () {
      navbar.classList.toggle("active");
      navbarToggler.classList.toggle("active");
    };

    addEventOnElem(navbarToggler, "click", toggleNav);

    const closeNav = function () {
      navbar.classList.remove("active");
      navbarToggler.classList.remove("active");
    };

    addEventOnElem(navbarLinks, "click", closeNav);

    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const onScroll = () => {
      if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // State for form and bookings
  const [showForm, setShowForm] = useState(false);
  const [bookings, setBookings] = useState([]);

  // Callback when booking succeeds
  const handleBookingSuccess = (booking) => {
    setBookings((prev) => [booking, ...prev]); // latest on top
    setShowForm(false); // close form after booking
  };

  return (
    <>
      <Header />

      <main>
        <article>
          <Herosection />

          {/* ✅ My Bookings Section */}
          <Bookingsection bookings={bookings} />

          <Servicesection />
          <Aboutsection />
          <Doctorsection />
          <CTAsection />

          {/* Book Appointment Button */}
          <div style={{ textAlign: "center", margin: "20px" }}>
            <button 
              onClick={() => setShowForm(true)} 
              className="btn"
            >
              Book Appointment
            </button>
          </div>

          {/* Show Appointment Form */}
          {showForm && (
            <AppointmentForm 
              onClose={() => setShowForm(false)} 
              onBookingSuccess={handleBookingSuccess} 
            />
          )}

          <Blogsection />
        </article>
      </main>

      <Footer />
    </>
  );
}

export default App;
