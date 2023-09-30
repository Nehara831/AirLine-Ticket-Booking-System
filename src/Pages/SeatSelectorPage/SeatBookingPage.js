// Import necessary libraries and components
import React from 'react';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './SeatBookingStyles.css';
import SeatBookingComponent from '../../componenets/FlightSeatPicker'
// Define the SeatBookingPage component
const SeatBookingPage = () => {
    return (
        <div className="seatBookingPage">
            <div className="leftSide">
                <SeatBookingComponent />
            </div>
            <div className="rightSide">
            <Card title="Class Information" style={{ width: '100%' }}>
            <CardContent>
                <Grid container spacing={2}>
                    {/* Left Side: Economy Class */}
                    <Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>
                            Economy Class
                        </Typography>
                        <Typography variant="body1">
                            Economy class offers affordable flying with standard seating arrangements and basic amenities.
                        </Typography>
                    </Grid>

                    {/* Right Side: Business Class */}
                    <Grid item xs={6}>
                        <Typography variant="h3" gutterBottom>
                            Business Class
                        </Typography>
                        <Typography variant="body1">
                            Business class provides a premium flying experience with extra leg room, better food, and other amenities.
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
            </div>
        </div>
    );
};

// Export the SeatBookingPage component
export default SeatBookingPage;
