// Import necessary libraries and components
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UpdatePassengerInformationForm from './NewRegChat';
import { useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';


import { useFlight } from '../UserContext';




const MultiPassengerEntry = () => {
    const location = useLocation();

   // const passengerData = location.state?.passengerDetails;
    const pass1=location.state?.passengerDetails1;
    const dataSize = location.state?.passengerDetails1.length;
    
    

  const navigate = useNavigate(); 

 // console.log('recieved',passengerData);
  const flightContext = useFlight();
  const { userId,noOfPassengers, setnoOfPassengers } = flightContext;

    const [submissionCount, setSubmissionCount] = useState(0);
   
    
  //  const passengerDetails=passengerData._embedded.passengers;
    const passengerDetails=pass1;

    
  // Convert string to number
    const handleFormSubmit = (values) => {
     // console.log('Received values:', values);

      setSubmissionCount(prevCount => prevCount + 1);
      if (submissionCount >= noOfPassengers) {
          console.log('Submission count:', submissionCount);

      }
    
    };
  
    return (
 <div style={{ width: '800px', height: '800px',  overflowY: 'auto', paddingLeft: '20px' }}>
   {submissionCount <  dataSize? (
    <UpdatePassengerInformationForm
      passengerDetails={passengerDetails[submissionCount]}
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
