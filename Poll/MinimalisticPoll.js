import React, { useState } from 'react';
import './MinimalisticPoll.css';

const LocalGovernmentPoll = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const pollQuestion =
    'What are important roles and responsibilities of a local government in Nepal?';

  const pollOptions = [
    'Infrastructure development (roads, water supply, sanitation)',
    'Education and healthcare services',
    'Local economic development and job creation',
    'Community development and social programs',
    'Environmental conservation and disaster management',
  ];

  return (
    <div className="poll-container">
      <h2 className="poll-question">{pollQuestion}</h2>
      <div className="poll-options">
        {pollOptions.map((option, index) => (
          <div
            key={index}
            className={`poll-option ${
              selectedOption === index ? 'selected' : ''
            }`}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalGovernmentPoll;
