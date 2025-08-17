// Bookingsection.jsx
import React from "react";

export default function Bookingsection({ bookings }) {
  return (
    <section className="bookings-section">
      <h2 className="section-title">My Appointments</h2>
      
      {bookings.length === 0 ? (
        <p className="no-bookings">No appointments booked yet</p>
      ) : (
        <div className="bookings-table">
          <div className="table-header">
            <div>Name</div>
            <div>DOB</div>
            <div>Phone</div>
            <div>Gender</div>
            <div>Appointment Date</div>
            <div>Time</div>
            <div>Service</div>
            <div>Doctor</div>
          </div>
          
          {bookings.map((booking, index) => (
            <div className="booking-row" key={index}>
              <div>{booking.fullName || "N/A"}</div>
              <div>{booking.dob || "N/A"}</div>
              <div>{booking.phone || "N/A"}</div>
              <div>{booking.gender || "N/A"}</div>
              <div>{booking.appointmentDate || "N/A"}</div>
              <div>{booking.appointmentTime || "N/A"}</div>
              <div>{booking.service || "N/A"}</div>
              <div>{booking.doctor || "N/A"}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}