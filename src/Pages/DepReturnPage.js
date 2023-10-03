// import React from 'react';
// import Depart from './DepPage'
// import './DepReturnPage.css'
// function DepReturnPage() {
//     return (
//       <>
//       <div className="DepReturnBox">
//     <div className='Label'>Departing Flights</div>
//     <Depart flightData={}/>

//       <div className='Label'>Returning Flights</div>
       
//       <Depart/>
       
//         </div></>
      
//     );
//   }
  
//   export default DepReturnPage;


import React, { useState, useEffect } from 'react';
import Depart from './DepPage';
import './DepatingPage';

import SeatHeader from '../componenets/SeatSelectorHeader';

function DepReturnPage() {
const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual URL of your API
    fetch('https://6515a4e1dc3282a6a3cec028.mockapi.io/api/flightData/flightDetails')
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an array of flight data objects
        
        setFlightData(data);
      })
      .catch((error) => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  const departingFlights = flightData.filter((flight) => flight.type === 'Arriving');
  const returningFlights = flightData.filter((flight) => flight.type === 'Returning');


  return (
    <>
      <div className="DepReturnBox">
        <div className='Label'>Departing Flights</div>
        <SeatHeader />

        {departingFlights.map((flight, index) => (
          <Depart key={index} flightData={flight} />
        ))}

        <div className='Label'>Returning Flights</div>
        <SeatHeader />

        {returningFlights.map((flight, index) => (
          <Depart key={index} flightData={flight} />
        ))}
      </div>
    </>
  );
        }

export default DepReturnPage;
