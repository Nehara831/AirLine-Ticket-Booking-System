import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';
import './NewFlightCard.css'
import PropTypes from 'prop-types';
import { useFlight } from '../UserContext';
import { useNavigate } from 'react-router-dom';



const ReusableCard = ({ flightData}) => {

    const { userId,selectedFlight, setSelectedFlight } = useFlight();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');


    

    const handleAddFlight = async () => {
           const apiUrl = `http://localhost:8080/users/${userId}/passengers`;
           axios.get(apiUrl)
                   .then((response) => {
                    navigate(`/updatePassengerDetails`,{ state: { passengerDetails: response.data } });
                       // If the response data is an array, set it to passengerDetails
                      console.log('real response',response);
                    
                     
                   })
                   .catch((error) => {
                     // Handle any errors
                     console.error('Error fetching passenger list:', error);
                   });

  };
  const handleUpdateFlight = async () => {
    const apiUrl = `http://localhost:8080/users/${userId}/passengersList`;
    axios.get(apiUrl)
            .then((response) => {
             navigate(`/updatePassengerDetails`,{ state: { passengerDetails1: response.data } });
                // If the response data is an array, set it to passengerDetails
               console.log('real response',response);
               
               
              
            })
            .catch((error) => {
              // Handle any errors
              console.error('Error fetching passenger list:', error);
            });

};
const handleDelete = () => {
  // Make a DELETE request to the server with the flight ID
  axios
  .delete(`http://localhost:8080/flights/${selectedFlight}/user/${userId}`)    .then((response) => {
      setMessage(`Flight with ID ${selectedFlight} deleted successfully.`);
      // Clear the flight ID input field
      // setSelectedFlight('');
    })
    .catch((error) => {
      setMessage(`Error deleting flight with ID ${selectedFlight}: ${error.message}`);
    });
};

    const handleUpdateButtonClick = () => {
        console.log(flightData);
        setSelectedFlight(flightData.flightId);
        handleUpdateFlight();
        // navigate(`/updatePassengerDetails`,{ state: { passengerDetails: response.data } });
      
      };

      const handleDeleteButtonClick = () => {
        console.log(flightData);
        setSelectedFlight(flightData.flightId);
        handleDelete();
        // navigate(`/updatePassengerDetails`,{ state: { passengerDetails: response.data } });
      
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
  >      <div className="CardContent">
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
        <div className="TitleButtons">
          <Button
            type="primary"
            style={{ backgroundColor: '#605DEC', borderColor: '#605DEC' }}
            onClick={handleUpdateButtonClick}
          >
            Update Flight
          </Button>
          <Button
            type="default"
            style={{ marginLeft: '8px' }} // Add some margin for spacing
            onClick={handleDeleteButtonClick} // Add a click handler for the second button
          >
            Delete Booking
          </Button>
       
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