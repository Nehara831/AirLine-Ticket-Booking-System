import React, { useState } from 'react';
import './FlightDataRow.css';
import SubmitButton from '../Buttons/DepartingSubmitButton'

import DepartingPage from '../../Pages/DepatingPage';
const FlightDataRow = () => {
 
  return (
    <>
    <div className='FlightRow'>
        <DepartingPage/>
        <SubmitButton/>
    
    </div>
    </>
    
  );
   
 
}

export default FlightDataRow;