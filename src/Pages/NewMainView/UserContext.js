

import React, { createContext, useContext, useState } from 'react';

const FlightContext = createContext();

export const useFlight = () => {
    return useContext(FlightContext);
};

export const FlightProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [passengerDetails, setPassengerDetails] = useState([]);
    const [noOfPassengers, setnoOfPassengers] = useState(1);
    const [bookedFlights, setBookedFlights] = useState(9);
    const[flightList, setFlightList]=useState([]);
    const addPassenger = (passenger) => {
        setPassengerDetails(prev => [...prev, passenger]);
    };

    return (
        <FlightContext.Provider value={{ bookedFlights, setBookedFlights,flightList, setFlightList,userId, setUserId,noOfPassengers, setnoOfPassengers,selectedFlight, setSelectedFlight, passengerDetails, addPassenger }}>
            {children}
        </FlightContext.Provider>
    );
};
