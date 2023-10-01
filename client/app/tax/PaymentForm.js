"use client";

import React, { useState } from "react";

const PaymentForm = ({ onPaymentComplete }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = () => {
    // In a real application, you would handle payment processing here.
    // For this example, let's assume payment is successful with any OTP.
    alert("Payment has been successfully processed!");
    onPaymentComplete();
  };

  return (
    <div className="payment-form">
      <h2>Payment Form</h2>
      {step === 1 && (
        <form onSubmit={handlePhoneSubmit}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 2 && (
        <div>
          <form onSubmit={handlePayment}>
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <br />
            <button type="submit">Submit Payment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
