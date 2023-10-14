import React, { useState,useEffect,createContext, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import { Button, Typography } from '@mui/material';
import './FlightSeatPickerStyles.css';
import axios from 'axios';
import { useFlight } from '../Pages/NewMainView/UserContext';


export const SeatAssignmentsContext = createContext();


const FlightSeatPicker = () => {
  let availableSeats = [];
  const generateAvailableSeats = () => {
    const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const columns = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    
     
  
  
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        const seatNumber = rows[i] + columns[j];
        availableSeats.push(seatNumber);
      }
    }
  
    return availableSeats;
  };
  availableSeats = generateAvailableSeats();
  const initialSeatAssignments = availableSeats.map((seatNumber) => ({
    passengerId: null,
    seatNumber: seatNumber,
  }));
  
  const { userId, selectedFlight } = useFlight();
  const [passengers, setPassengers] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatAssignments, setSeatAssignments] = useState(initialSeatAssignments);
  
  
  
  
  // Call the function to generate available seats
 

 

  useEffect(() => {
    // Define a function to fetch passengers for the user
    const fetchPassengers = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${userId}/passengers`);
        if (response.status === 200) {
          setPassengers(response.data);
        }
      } catch (error) {
        console.error('Error fetching passengers:', error);
      }
    };

    // Call the fetchPassengers function to fetch data
    fetchPassengers();
  }, [userId]);

  const handleSeatToggle = (seatNumber) => {
   
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== seatNumber)
        
      );
     
    } else if (selectedSeats.length < passengers.length) {
      
      setSelectedSeats([...selectedSeats, seatNumber]);
      
      assignSeatToPassenger(seatNumber);
      
      
    }
  };
  

  const assignSeatToPassenger = (seatNumber) => {
    // Find the next available passenger to assign the seat
    const nextPassengerIndex = seatAssignments.findIndex(
      (assignment) => !assignment.passengerId);
     

    if (nextPassengerIndex !== passengers.length+1) {

      const updatedAssignments = [...seatAssignments];
      updatedAssignments[nextPassengerIndex] = {
        passengerId: passengers[nextPassengerIndex].passengerId,
        seatNumber: seatNumber,
      };
      setSeatAssignments(updatedAssignments);
     
      
    }
  };

  useEffect(() => {
    // Define a function to send seatAssignments to the backend
    const sendSeatAssignmentsToBackend = async () => {
      try {
        // Make an HTTP POST request to your backend API with updated seatAssignments
        const response = await axios.post('http://your-backend-api-url', {
          seatAssignments: seatAssignments,
          userId:userId,
          flightId:selectedFlight,
           // Pass the updated seatAssignments
        });

        // Handle the response if needed
        console.log('Seat assignments sent to the backend:', response.data);
      } catch (error) {
        console.error('Error sending seat assignments:', error);
      }
    };

    // Call the function whenever seatAssignments changes
    sendSeatAssignmentsToBackend();
  }, [seatAssignments]); // Add seatAssignments as a dependency


  const renderSeatGrid = () => {
    const rows = [];
    const numRows = 20;
    const numSeatsPerRow = 6;

    for (let row = 1; row <= numRows; row++) {
      const seatRow = [];
      for (let seatNum = 1; seatNum <= numSeatsPerRow; seatNum++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seatNum)}`;
        seatRow.push(
          <Grid item key={seatNumber}>
            <Checkbox
              checked={selectedSeats.includes(seatNumber)}
              onChange={() => handleSeatToggle(seatNumber)}
              color="primary"
              checkedIcon={
                <Button 
                className="square-button" 
                variant="contained" 
                style={{ 
                  fontSize: '0.7em', 
                  backgroundColor: '#605DEC',
                }}
              >                  {seatNumber}
                </Button>
              }
              icon={
                <Button 
                className="square-button" 
                variant="outlined" 
                style={{ 
                  fontSize: '0.7em', 
                  backgroundColor: '#7C8DB0', 
                  color: '#E9E8FC'  // Set text color to white
                }}
              >                  {seatNumber}
                </Button>
              }
            />
          </Grid>
        );

        if (seatNum % 3 === 0 && seatNum < numSeatsPerRow) {
          seatRow.push(
            <Grid
              item
              key={`spacer-${seatNumber}`}
             
              width={50}
              height={65}
              justifyContent="center"
              textAlign="center"
            >
              <Typography variant="h4" sx={{ opacity:0.8, fontWeight:500 }} mt={1.5} style={{ fontSize: '1em'}}>
                {row}
              </Typography>{' '}
            </Grid>
          );
        }
      }

      rows.push(
        <Grid container item key={row} justifyContent="center" spacing={1} style={{ fontSize: '0.7em'}}>
          {seatRow}
        </Grid>
      );
    }

    return rows;
  };

  const renderSeatAssignments = () => {


    
    return seatAssignments.map((assignment, index) => (
      <div key={index}>
        {assignment.passengerId && (
          <div>
            Selected seat for passenger {index + 1}: {assignment.seatNumber}
          </div>
        )}
      </div>
    ));
  };


  // const {  userID, selectedFlight } = useFlight();
  return (
    <SeatAssignmentsContext.Provider value={seatAssignments}>
       <div style={{ height: '150vh', overflowY: 'auto' }}>
    {renderSeatAssignments()}
      <Grid container spacing={1} justifyContent="center">
        {renderSeatGrid()}
      </Grid>
      
    </div>
    </SeatAssignmentsContext.Provider>
   
  );
};

export default FlightSeatPicker;
