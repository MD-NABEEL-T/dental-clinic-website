import React from "react";

export default function Bookingsection({ bookings }) {
  return (
    <div id="bookings-section">
    <section className="bookings-section" >
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet. Book your appointment above!</p>
      ) : (
        bookings.map((b, i) => (
          <div key={i} className="booking-card">
            <p><strong>{b.fullName}</strong></p>
            <p>{b.appointmentDate} at {b.appointmentTime}</p>
            <p>Service: {b.service}</p>
            <p>Doctor: {b.doctor}</p>
          </div>
        ))
      )}
    </section>
    </div>
  );
}
