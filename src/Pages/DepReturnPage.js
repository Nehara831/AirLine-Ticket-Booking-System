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
import { useLocation } from 'react-router-dom';
import SeatHeader from '../componenets/SeatSelectorHeader';
import{useFlight} from './NewMainView/UserContext'
import FlightCard from "./FlightCard/FlightCard"
import './DepReturnPage.css'
import FlightTable from './FlightCard/FlightTable'
function DepReturnPage() {


const location = useLocation();
    const flyData = location.state?.flightData;
    const { selectedFlight, setSelectedFlight } = useFlight();
  
  const { departingFlights, arrivingFlights } = flyData;

  return (
    <>
     {/* <h1>Flight ID: {selectedFlight}</h1> */}
      <div className="DepReturnBox">
        <div className='Label'>Departing Flights</div>
        {/* <SeatHeader /> */}

       
         
          <FlightTable  flightData={departingFlights} />
        

        <div className='Label'>Returning Flights</div>
        {/* <SeatHeader /> */}

       
        <div className="DepReturnBox">
          <FlightTable  flightData={arrivingFlights} />
       </div>
      </div>
    </>
  );
        }

export default DepReturnPage;
