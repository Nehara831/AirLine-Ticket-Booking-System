import React from 'react';
import { Card, Button } from 'antd';
import './FlightCard.css'
import PropTypes from 'prop-types';
import{useFlight} from '../NewMainView/UserContext'
import { useNavigate } from 'react-router-dom';


const ReusableCard = ({ flightData}) => {

    const { selectedFlight, setSelectedFlight } = useFlight();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        console.log(flightData);
        setSelectedFlight(flightData.flightId);
        const totalPassengers = 5;  // Assume 5 passengers as an example
        navigate(`/passengerDetails/${totalPassengers}`);
      
      };
  return (
    <Card
      className="ReusableCard"
      title={flightData.airlineName}
      extra={<Button type="primary" onClick={handleButtonClick}>Submit</Button>}
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
};

export default ReusableCard;
