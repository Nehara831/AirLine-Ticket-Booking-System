import React, { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import { Button, Typography } from '@mui/material';
import './FlightSeatPickerStyles.css';
import { useParams } from 'react-router-dom';
// { selectedFlight, user } is passes 
const FlightSeatPicker = ({ selectedFlight, user }) => {
  const { flightId } = useParams(); 
  const [availableSeats, setAvailableSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  useEffect(() => {
    // Create a function to fetch available seats data using the flight ID
    const fetchAvailableSeats = async () => {
      try {
        // Make an API request to fetch available seats data based on flightId
        const response = await fetch(`/api/available-seats/${flightId}`); // Replace with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setAvailableSeats(data);
        } else {
          // Handle error if the request fails
          console.error('Failed to fetch available seats data');
        }
      } catch (error) {
        console.error('Error fetching available seats data:', error);
      }
    };

    // Call the fetchAvailableSeats function to fetch data
    fetchAvailableSeats();
  }, [flightId]);

  const handleSeatToggle = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

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

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
     
      <Grid container spacing={1} justifyContent="center">
        {renderSeatGrid()}
      </Grid>
      <div>Selected Seats: {selectedSeats.join(', ')}</div>
    </div>
  );
};

export default FlightSeatPicker;