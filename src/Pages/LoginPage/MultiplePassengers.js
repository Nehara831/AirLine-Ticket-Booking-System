// Import necessary libraries and components
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PassengerInformationForm from './RegChat';
import { useNavigate } from 'react-router-dom'; 


import { useFlight } from '../NewMainView/UserContext';

const MultiPassengerEntry = () => {
  const navigate = useNavigate(); 


  const flightContext = useFlight();
  const { noOfPassengers, setnoOfPassengers } = flightContext;

    const [submissionCount, setSubmissionCount] = useState(0);
   
  const totalPassengerCount = 10;

  // Convert string to number
    const handleFormSubmit = (values) => {
      console.log('Received values:', values);

      setSubmissionCount(prevCount => prevCount + 1);
      if (submissionCount >= noOfPassengers) {
        // Navigate to the next page when all passengers are entered
         // Replace '/nextPage' with the actual URL of the next page
      }
    
    };
  
    return (
<div style={{ width: '800px', height: '800px',  overflowY: 'auto', paddingLeft: '20px' }}>
  {submissionCount < noOfPassengers ? (
    <PassengerInformationForm
      clearForm={submissionCount}
      onSubmit={handleFormSubmit}
      style={{ maxHeight: '100%', overflowY: 'auto' }}
    />
  ) : 
  <div>
          { navigate('/seatSelector')}
          Navigating to the next page...
        </div>
  }
</div>

    );
  };
  
  export default MultiPassengerEntry;
