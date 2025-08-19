import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Herosection from "./component/Herosection";
import Servicesection from "./component/Servicesection";
import Aboutsection from "./component/Aboutsection";
import Doctorsection from "./component/Doctorsection";
// import CTAsection from "./component/CTAsection";
import Blogsection from "./component/Blogsection";
import Bookingsection from "./component/Bookingsection";

function App() {
  // Navbar + Scroll Logic
  useEffect(() => {
    const addEventOnElem = (elem, type, callback) => {
      if (!elem) return;
      if (elem.length && elem.length > 1) {
        elem.forEach((el) => el.addEventListener(type, callback));
      } else {
        elem.addEventListener(type, callback);
      }
    };

    const navbar = document.querySelector("[data-navbar]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const navbarToggler = document.querySelector("[data-nav-toggler]");

    const toggleNav = () => {
      if (!navbar || !navbarToggler) return;
      navbar.classList.toggle("active");
      navbarToggler.classList.toggle("active");
    };

    const closeNav = () => {
      if (!navbar || !navbarToggler) return;
      navbar.classList.remove("active");
      navbarToggler.classList.remove("active");
    };

    if (navbarToggler) addEventOnElem(navbarToggler, "click", toggleNav);
    if (navbarLinks.length > 0) addEventOnElem(navbarLinks, "click", closeNav);

    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const onScroll = () => {
      if (!header) return;
      if (window.scrollY >= 100) {
        header.classList.add("active");
        if (backTopBtn) backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        if (backTopBtn) backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Booking State
  const [showForm, setShowForm] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phone: "",
    gender: "",
    appointmentDate: "",
    appointmentTime: "",
    service: "",
    doctor: ""
  });

  // get current userId (phone/email) from localStorage if exists
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  // Form handling
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = { ...formData };

    // use phone as unique identifier
    const currentUserId = newBooking.phone;
    if (!currentUserId) {
      toast.error("⚠️ Please enter your phone number");
      return;
    }

    setUserId(currentUserId);
    localStorage.setItem("userId", currentUserId);

    // load existing bookings for this user
    const existing = JSON.parse(localStorage.getItem(`bookings_${currentUserId}`)) || [];

    // save updated list
    const updatedBookings = [newBooking, ...existing];
    localStorage.setItem(`bookings_${currentUserId}`, JSON.stringify(updatedBookings));

    // update state
    setBookings(updatedBookings);
    setShowForm(false);

    toast.success("🎉 Appointment booked successfully!");

    setFormData({
      fullName: "",
      dob: "",
      phone: "",
      gender: "",
      appointmentDate: "",
      appointmentTime: "",
      service: "",
      doctor: ""
    });
  };

  // Load bookings for the logged-in user
  useEffect(() => {
    if (userId) {
      const saved = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
      setBookings(saved);
    }
  }, [userId]);

  return (
    <>
      <Header onBookClick={() => setShowForm(true)} />

      <main>
        <article>
          <Herosection />

          {/* Mobile booking button */}
          <div className="mobile-book-btn">
            <button onClick={() => setShowForm(true)} className="btn">
              Book Appointment
            </button>
          </div>

          <Bookingsection bookings={bookings} />
          <Servicesection />
          <Aboutsection />
          <Doctorsection />

          {/* <CTAsection onBookClick={() => setShowForm(true)} /> */}

          {/* Appointment Form Modal */}
          {showForm && (
            <div className="appointment-container">
            <div className={`appointment-modal ${showForm ? "active" : ""}`}>
              <div className="modal-content">
                <button
                  className="close-btn"
                  onClick={() => setShowForm(false)}
                >
                  ×
                </button>

                <h2>Book Appointment</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Full Name:
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Date of Birth:
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Phone:
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label>
                    Appointment Date:
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Appointment Time:
                    <input
                      type="time"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Service:
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Whitening">Whitening</option>
                    </select>
                  </label>

                  <label>
                    Doctor:
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="John">Dr. John</option>
                      <option value="Nick">Dr. Nick</option>
                    </select>
                  </label>

                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            </div>
          )}

          <Blogsection />
        </article>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
