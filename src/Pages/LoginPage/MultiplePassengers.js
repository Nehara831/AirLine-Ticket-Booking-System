// Import necessary libraries and components
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PassengerInformationForm from './RegChat';



const MultiPassengerEntry = () => {
    const [submissionCount, setSubmissionCount] = useState(0);
    const { totalPassengers } = useParams();
  const totalPassengerCount = parseInt(totalPassengers, 10);  // Convert string to number
    const handleFormSubmit = (values) => {
      console.log('Received values:', values);

      setSubmissionCount(prevCount => prevCount + 1);
    
    };
  
    return (
      <div>
        {submissionCount < totalPassengerCount ? (
          <PassengerInformationForm
            clearForm={submissionCount}
            onSubmit={handleFormSubmit}
          />
        ) : (
          <div>All passengers have been entered.</div>
        )}
      </div>
    );
  };
  
  export default MultiPassengerEntry;
