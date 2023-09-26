import React from 'react';
import Depart from './DepPage'
import './DepReturnPage.css'
function DepReturnPage() {
    return (
      <>
      <div className="DepReturnBox">
    <div className='Label'>Departing Flights</div>
    <Depart/>

      <div className='Label'>Returning Flights</div>
        <Depart/>
        
       
        </div></>
      
    );
  }
  
  export default DepReturnPage;