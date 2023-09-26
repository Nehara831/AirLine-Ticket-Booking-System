import React from 'react';
import FlightDataRow from '../componenets/DepartingFlights/FlightDataRow'
import './DepPage.css'

function DepPage() {
  return (
    <>
    <div className="DepStyle">
      
      <FlightDataRow/>
      <FlightDataRow/>
      <FlightDataRow/>
      <FlightDataRow/>
     
      </div></>
    
  );
}

export default DepPage;