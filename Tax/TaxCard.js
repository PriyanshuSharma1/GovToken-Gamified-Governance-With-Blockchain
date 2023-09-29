import React from 'react';
import { useState } from 'react';
import PaymentForm from './PaymentForm';

const TaxCard = ({ title, amount, dueDate, info, onPayClick }) => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const handlePaymentClick = () => {
      setShowPaymentForm(true);
    };
  
  return (
    <div className="tax-card">
      <h2>{title}</h2>
      <p>Amount: ${amount}</p>
      <p>Due Date: {dueDate}</p>
      <p>Info: {info}</p>
      {showPaymentForm ? (
        <button onClick={() => setShowPaymentForm(false)}>Cancel Payment</button>
      ) : (
        <button onClick={handlePaymentClick}>Pay</button>
      )}

      {showPaymentForm && (
        <PaymentForm
          onPaymentComplete={() => setShowPaymentForm(false)}
        />
      )}
    </div>
  );
};

export default TaxCard;
