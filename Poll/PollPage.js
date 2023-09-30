import React, { useState } from 'react';
import './MinimalisticPoll.css'; // Import your CSS file
import MinimalisticPoll from './MinimalisticPoll';

const PollPage = () => {
  const [govTokens, setGovTokens] = useState(1000);
  const [currentPollIndex, setCurrentPollIndex] = useState(0);

  const handleVote = () => {
    // Deduct 50 GOV tokens for each vote
    if (govTokens >= 50) {
      setGovTokens(govTokens - 50);
    } else {
      alert('Insufficient GOV tokens to vote.');
    }
  };

  const polls = [
    {
      question: 'What are important roles and responsibilities of a local government in Nepal?',
      options: [
        'Infrastructure development (roads, water supply, sanitation)',
        'Education and healthcare services',
        'Local economic development and job creation',
        'Community development and social programs',
        'Environmental conservation and disaster management',
      ],
    },
    {
      question: 'How much should the budget for the ward be?',
      options: ['10,000', '50,000', '100,000', '500,000', '1,000,000'],
    },
    {
      question: 'What campaign strategy would be best for the ward?',
      options: [
        'Community outreach and engagement',
        'Infrastructure development',
        'Education and healthcare improvement',
        'Local job creation',
        'Environmental conservation',
      ],
    },
    // Add more polls here
  ];

  const handleNext = () => {
    if (currentPollIndex < polls.length - 1) {
      setCurrentPollIndex(currentPollIndex + 1);
    }
  };

  return (
    <div className="App">
      <div className="gov-tokens">
        <p>GOV Tokens: {govTokens}</p>
      </div>
      <div className="poll-container">
        <MinimalisticPoll
          question={polls[currentPollIndex].question}
          options={polls[currentPollIndex].options}
        />
        <button onClick={handleVote}>Vote</button>
      </div>
      <div className="next-button-container">
        <button onClick={handleNext} disabled={currentPollIndex === polls.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PollPage;
