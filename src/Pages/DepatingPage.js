

import './DepartingPage.css';
import SubmitButton from '../componenets/Buttons/DepartingSubmitButton'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const DepartingPage=({ flightData })=>{

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/passengerDetails`);
   
  
  };
      return (
        <div className="FlightDataRow">
          <div className="DataRowCombined">
            <div className="DataRowPrimary">
              <div className="TextBox">
                <div className="Label1">{flightData.duration}</div>
              </div>
              <div className="TextBox">
                <div className="Label1">{flightData.departureTime}</div>
              </div>
              <div className="TextBox1">
                <div className="Label1">{flightData.stops} stop</div>
              </div>
              <div className="TextBox">
                <div className="Label1">
                  <div className="Label2">LKR </div> 
                  <div className="Label3">{flightData.price}</div>
                </div>
              </div>
            </div>
            <div className="DataRowSecondary">
              <div className="TextBox">
                <div className="Label2">{flightData.airline}</div>
              </div>
          
              <div className="TextBox">
                <div className="Label2">{flightData.transferTime} in {flightData.transferLocation}</div>
              </div>
              <div className="TextBox1">
                <div className="Label2">{flightData.tripType}</div>
              </div>
            </div>
          </div>
          <Button 
        type="primary" style={{background: '#605DEC'}}
        onClick={handleButtonClick}
      >
        Submit
      </Button >
    
        </div>
      );
    }
    
    export default DepartingPage;
