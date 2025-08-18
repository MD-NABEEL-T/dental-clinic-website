import React, { useState } from "react";
import "./Appointmentform.css";

export default function Appointmentform({ onClose, onBookingSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phone: "",
    gender: "",
    appointmentDate: "",
    appointmentTime: "",
    service: "",
    doctor: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzY-vWcH4KfzqxrzriiGtHQayvS3mam4tjWuQ6oFMUe20U9Zc2SyFzVf2OUGTl_vLvv/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // disable button

    console.log("Submitting form data:", formData); // Log form data to console

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccessMessage("✅ Appointment booked successfully!");
      onBookingSuccess(formData); // send booking back to homepage

      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setLoading(false); // re-enable button
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <p>D.O.B</p>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p>Appointment date :</p>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
          <p>Appointment timing:</p>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Service</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Whitening">Whitening</option>
            <option value="Filling">Filling</option>
          </select>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. John">Dr. John</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
        {successMessage && <div className="success-msg">{successMessage}</div>}
      </div>
    </div>
  );
}
