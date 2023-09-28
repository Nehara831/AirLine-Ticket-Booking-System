import React from 'react';
import FlightDataRow from '../componenets/DepartingFlights/FlightDataRow'
import './DepPage.css'
import SeatHeader from '../componenets/SeatSelectorHeader'
function DepPage() {
  return (
    <>
    <div className="DepStyle">
      <SeatHeader/>
      <FlightDataRow/>
      <FlightDataRow/>
      <FlightDataRow/>
      <FlightDataRow/>
      <FlightDataRow/>

      </div></>
    
  );
}

export default DepPage;