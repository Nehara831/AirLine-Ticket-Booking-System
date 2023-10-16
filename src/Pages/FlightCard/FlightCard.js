import React from 'react';
import { Card, Button } from 'antd';
import './FlightCard.css'
import PropTypes from 'prop-types';
import{useFlight} from '../NewMainView/UserContext'
import { useNavigate } from 'react-router-dom';


const ReusableCard = ({ flightData}) => {

    const { userId,selectedFlight, setSelectedFlight } = useFlight();
    const navigate = useNavigate();


    

    const handleAddFlight = async () => {
      try {
          const response = await fetch(`http://localhost:8080/users/${userId}/add-flight/${selectedFlight}`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
          });

          if (response.ok) {
              console.log("Flight added to user successfully.");
          } else {
              console.error("Error adding flight to user.");
          }
      } catch (error) {
          console.error("Error:", error);
      }
  };

    const handleButtonClick = () => {
        console.log(flightData);
        setSelectedFlight(flightData.flightId);
        handleAddFlight();
        navigate(`/passengerDetails`);
      
      };
  return (
    <Card
  className="ReusableCard"
  title={
    <div className="CardTitle">
      {flightData.airlineName}
      <hr className="CardTitleDivider" /> {/* Add a horizontal line */}
    </div>
  }
  extra={<Button type="primary" style={{ backgroundColor: '#605DEC', borderColor: '#605DEC' }} onClick={handleButtonClick}>Select Flight</Button>}
>
      <div className="CardContent">
        <div className="CardRow">
          <div className="CardLabel">Duration:</div>
          <div className="CardValue">{flightData.duration}</div>
        </div>
        <div className="CardRow">
          <div className="CardLabel">Departure Time:</div>
          <div className="CardValue">{flightData.departureTime}</div>
        </div>
        <div className="CardRow">
          <div className="CardLabel">No of Stops:</div>
          <div className="CardValue">{flightData.stops}</div>
        </div>
      </div>
      <div className="CardContent">
        <div className="ParallelRow">
          <div className="CardLabel">Price:</div>
          <div className="CardValue">{flightData.price}</div>
        </div>
        <div className="ParallelRow">
          <div className="CardLabel">Arrival Time:</div>
          <div className="CardValue">{flightData.arrivalTime}</div>
        </div>
        <div className="ParallelRow">
          <div className="CardLabel">Flight Type:</div>
          <div className="CardValue">{flightData.flightType}</div>
        </div>
      </div>
    </Card>
  );
};

ReusableCard.propTypes = {
  flightData: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  className: PropTypes.string, 

};

export default ReusableCard;
