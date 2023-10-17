// Import necessary libraries and components
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PassengerInformationForm from './RegChat';
import { useNavigate } from 'react-router-dom'; 


import { useFlight } from '../NewMainView/UserContext';


    

const MultiPassengerEntry = () => {
  const navigate = useNavigate(); 


  const flightContext = useFlight();
  const { userId,noOfPassengers, setnoOfPassengers } = flightContext;

    const [submissionCount, setSubmissionCount] = useState(0);
   
  // Convert string to number
    const handleFormSubmit = (values) => {
     // console.log('Received values:', values);

      setSubmissionCount(prevCount => prevCount + 1);
      if (submissionCount >= noOfPassengers) {
        // Navigate to the next page when all passengers are entered
         // Replace '/nextPage' with the actual URL of the next page
      }
    
    };
  
    return (
<div style={{ width: '900px', height: '500px',  paddingLeft: '20px',overflow: 'hidden' }}>
  {submissionCount < noOfPassengers ? (
    <PassengerInformationForm
      
      clearForm={submissionCount}
      onSubmit={handleFormSubmit}
      // style={{ maxHeight: '400px', verflow: 'hidden' }}
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
