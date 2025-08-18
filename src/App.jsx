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
    // Navbar and scroll logic...
    // ...same as you have

  }, []);

  // State for form visibility and bookings list
  const [showForm, setShowForm] = useState(false);
  const [bookings, setBookings] = useState([]);

  // When a booking is successfully submitted
  const handleBookingSuccess = (booking) => {
    setBookings((prev) => [booking, ...prev]);
    setShowForm(false);
  };

  return (
    <>
       <Header onBookingSuccess={handleBookingSuccess}

      />

      <main>
        <article>
          <Herosection />
          <Bookingsection bookings={bookings} />
          <Servicesection />
          <Aboutsection />
          <Doctorsection />
          <CTAsection />

          {/* Optional fallback button */}
          <div style={{ textAlign: "center", margin: "20px" }}>
            <button onClick={() => setShowForm(true)} className="btn">
              Book Appointment
            </button>
          </div>

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
