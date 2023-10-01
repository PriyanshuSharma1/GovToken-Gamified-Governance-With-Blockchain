"use client";
import React from 'react';
import TaxCard from './TaxCard';
import './tax.css'

const TaxPortal = () => {
  // Dummy tax data
  const taxes = [
    {
      title: 'Income Tax',
      amount: 5000,
      dueDate: 'December 31, 2023',
      info: 'Annual income tax payment.',
    },
    {
      title: 'Land Tax',
      amount: 1500,
      dueDate: 'June 30, 2023',
      info: 'Tax on land located at 123 Main St.',
    },
    {
      title: 'Rent Tax',
      amount: 800,
      dueDate: 'July 15, 2023',
      info: 'Tax on rental income from property.',
    },
    {
      title: 'Vehicle Tax',
      amount: 300,
      dueDate: 'May 31, 2023',
      info: 'Tax on registered vehicles.',
    },
  ];

  return (
    <div className="tax-portal">
      <h1>Tax Portal</h1>
      <div className="tax-cards">
        {taxes.map((tax, index) => (
          <TaxCard
            key={index}
            title={tax.title}
            amount={tax.amount}
            dueDate={tax.dueDate}
            info={tax.info}
            onPayClick={() => handlePayment(tax.title)}
          />
        ))}
      </div>
    </div>
  );
};

const handlePayment = (taxType) => {
  // Implement payment logic here
  alert(`Payment for ${taxType} initiated.`);
};

export default TaxPortal;