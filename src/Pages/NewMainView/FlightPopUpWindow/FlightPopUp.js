import NewFlightCard from './NewFlightCard'
import { useFlight } from "../UserContext";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './FlightPopUp.css'

const FlightPopup = ({ onClose }) => {


    const { userId,selectedFlight,bookedFlights } = useFlight();
    const [flightList, setFlightList] = useState([]);

    useEffect(() => {
        // Define the URL with the user ID as a query parameter
        const apiUrl = `http://localhost:8080/users/${userId}/flights`;
      
        // Make the GET request
        axios.get(apiUrl)
          .then((response) => {
            if (typeof response.data === 'object') {
              const dataArray = Object.values(response.data);
              setFlightList(dataArray);
              console.log("response",response.data);
            } else {
                setFlightList(response.data);

              console.error('Invalid response data:', response.data);
            }
          })
          .catch((error) => {
            // Handle any errors
            console.error('Error fetching flight list:', error);
          });
      }, [bookedFlights]);
      

    return (
       
      <div className="flight-popup">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="flight-cards">
          {flightList.map((flight,index) => (
            <NewFlightCard key={flight.flightId} flightData={flightList[index]} />
          ))}
        </div>
      </div>
     
    );
  };
  
  export default FlightPopup;