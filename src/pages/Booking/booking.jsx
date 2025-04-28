import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './booking.css';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

// eslint-disable-next-line no-unused-vars
const Booking = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    district: '',
    sector: '',
    cell: '',
    village: '',
    streetAddress: '',
    service: '',
    wasteVolume: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    termsAccepted: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    const phoneRegex = /^\+\d{10,15}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      return "Please enter a valid phone number (e.g., +1234567890).";
    }

    const wasteVolumeNum = parseFloat(formData.wasteVolume);
    if (isNaN(wasteVolumeNum) || wasteVolumeNum <= 0) {
      return "Please enter a valid waste volume (e.g., 5).";
    }

    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setIsLoading(true);

    // Log form data for debugging
    console.log("Form Data Before Submission:", formData);

    try {
      const wasteVolumeNum = parseFloat(formData.wasteVolume);
      const docRef = await addDoc(collection(db, "bookings"), {
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName,
        phoneNumber: formData.phoneNumber,
        district: formData.district,
        sector: formData.sector,
        cell: formData.cell,
        village: formData.village,
        streetAddress: formData.streetAddress,
        service: formData.service,
        wasteVolume: wasteVolumeNum,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
        termsAccepted: formData.termsAccepted,
        createdAt: Timestamp.fromDate(new Date())
      });

      console.log("Booking successfully saved with ID: ", docRef.id);
      alert("Booking submitted successfully!");
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        district: '',
        sector: '',
        cell: '',
        village: '',
        streetAddress: '',
        service: '',
        wasteVolume: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        termsAccepted: false
      });
      navigate('/');
    } catch (error) {
      console.error("Error saving booking:", {
        message: error.message,
        code: error.code,
        details: error.details
      });
      setError(`Error saving booking: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-form-wrapper">
        <div className="booking-header">
          <button className="close-button" onClick={() => navigate('/')} disabled={isLoading}>
            ✕
          </button>

          <div className="logo">
            <img src="/logo.png" alt="CAMEL Group Ltd" />
          </div>
          
          <h1>Booking Service</h1>
          <p>We are here to help you with your waste management needs at any time, book for your service now.</p>
        </div>

        <div className={`form-container ${isLoading ? 'loading' : ''}`}>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <div className="form-group">
                <label htmlFor="fullName">Full Names</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Amazina"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="imeli@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Amazina ya kampani"
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="telephone"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="Akarere"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="sector">Sector</label>
                <input
                  type="text"
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  placeholder="umurenge"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cell">Cell</label>
                <input
                  type="text"
                  id="cell"
                  name="cell"
                  value={formData.cell}
                  onChange={handleChange}
                  placeholder="Akagali"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="village">Village</label>
                <input
                  type="text"
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  placeholder="Umudugudu"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="streetAddress">Street Address</label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="numero yumuhanda"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="hitamo">Hitamo serivise</option>
                  <option value="waste-collection">Waste Collection</option>
                  <option value="recycling">Recycling</option>
                  <option value="disposal">Waste Disposal</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="wasteVolume">Volume of waste (m³)</label>
                <input
                  type="text"
                  id="wasteVolume"
                  name="wasteVolume"
                  value={formData.wasteVolume}
                  onChange={handleChange}
                  placeholder="Ingano yumwanda"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date/ umunsi byakorwaho</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  placeholder="dd / mm / yyyy"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time/ isaha byakorwaho</label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  placeholder="-- : --"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                <label htmlFor="termsAccepted">
                  By checking this box, you agree to our terms and conditions and consent to receive updates from us.
                </label>
              </div>
              
              <div className="form-group button-group">
                <button type="submit" className="book-now-button" disabled={isLoading}>
                  {isLoading ? "Booking..." : "Book Now"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;