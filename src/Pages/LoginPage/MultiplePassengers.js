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
   
    
    // const [passengerDetails, setPassengerDetails] = useState([]);

    
    // useEffect(() => {
    //   console.log("Hi");
    //   // Define the URL with the user ID as a query parameter
    //   const apiUrl = `http://localhost:8080/users/${userId}/passengers`;
    
    //   // Make the GET request
    //   axios.get(apiUrl)
    //     .then((response) => {
          
    //       if (typeof response.data._embedded.passengers === 'object') {
    //         const dataArray = Object.values(response.data._embedded.passengers);
            
    //          setPassengerDetails(dataArray);
    //          console.log('passenger Details',passengerDetails);
    //       } else {
    //         console.error('Invalid response data:', response.data);
    //       }
    //     })
    //     .catch((error) => {
    //       // Handle any errors
    //       console.error('Error fetching flight list:', error);
    //     });
    // }, []);


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
