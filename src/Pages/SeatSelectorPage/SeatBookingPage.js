// Import necessary libraries and components
import React from 'react';




import { Card, CardContent, CardActions, Button, Grid, Typography,Box } from '@mui/material';
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
                    <Typography variant="h3" gutterBottom style={{ fontSize: '1.2rem' }}>
    Economy Class
</Typography>
                        <Typography variant="body1"  style={{ fontSize: '0.8.rem' }}>
                            Economy class offers affordable flying with standard seating arrangements and basic amenities.
                        </Typography>
                        <ul className="custom-bullets">
                <li>Built-in entertainment system</li>
                <li>Complimentary snacks and drinks</li>
                <li>One free carry-on and personal item</li>
            </ul>
                    </Grid>

                    {/* Right Side: Business Class */}
                    <Grid item xs={6}>
                    <Typography variant="h3" gutterBottom style={{ fontSize: '1.2rem' }}>
    Business Class
</Typography> <Typography variant="body1" style={{ fontSize: '1.rem' }}>
                            Economy class offers affordable flying with standard seating arrangements and basic amenities.
                        </Typography>
                       
                        <ul className="business-bullets">
                <li>Extended leg room</li>
                <li>First two checked bags free</li>
                <li>Priority boarding</li>
                <li>Personalized service</li>
                <li>Seats that recline 40% more than economy</li>
            </ul>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
            <Box display="flex" justifyContent="center" width="100%" gap="30px">
                            <Button variant="contained" style={{ backgroundColor: '#605DEC', color: 'white', marginRight: '8px' }}>
                                Save
                            </Button>
                            <Button variant="contained" style={{ backgroundColor: '#605DEC', color: 'white' }}>
                                Close
                            </Button>
                        </Box>
                    </CardActions>
        </Card>
            </div>
        </div>
    );
};

// Export the SeatBookingPage component
export default SeatBookingPage;