import React from "react";

export default function Bookingsection({ bookings }) {
  return (
    <div id="bookings-section">
      <section className="bookings-section">
        <h2 style={{ color: "#1a54e2" }}>My Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet. Book your appointment above!</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>D.O.B</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Appointment Date</th>
                  <th>Appointment Time</th>
                  <th>Service</th>
                  <th>Doctor</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={`${b.fullName}-${b.appointmentDate}-${i}`}>
                    <td>{i + 1}</td>
                    <td>{b.fullName}</td>
                    <td>{b.dob}</td>
                    <td>{b.phone}</td>
                    <td>{b.gender}</td>
                    <td>{b.appointmentDate}</td>
                    <td>{b.appointmentTime}</td>
                    <td>{b.service}</td>
                    <td>{b.doctor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
