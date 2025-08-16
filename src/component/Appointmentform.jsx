import React, { useState } from "react";
import "./Appointmentform.css";

export default function Appointmentform({ onClose }) {
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

  // ✅ Your latest Google Apps Script Web App URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxbUtk0a705fzzhrzMloGQIkaZxIdTwM_X6II7tfWS78QPiPNM6D9ZcTJOCz473lD0i/exec";

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // important for Google Scripts
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccessMessage("✅ Appointment booked successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
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

          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
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

          <button type="submit">Book Appointment</button>
        </form>

        {successMessage && <div className="success-msg">{successMessage}</div>}
      </div>
    </div>
  );
}
