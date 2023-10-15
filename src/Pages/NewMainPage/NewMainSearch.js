import React, { useState } from 'react';
import { Select, Button, InputNumber, DatePicker } from 'antd';
import { FlightTakeoff, FlightLand, Person } from '@mui/icons-material';
import axios from 'axios';
import './SearchPanel.css';
import { useNavigate } from 'react-router-dom';
import {useFlight} from '../NewMainView/UserContext'
const { Option } = Select;

function SearchPanel() {

  const navigate = useNavigate();
  const flightContext = useFlight();
  const { noOfPassengers, setnoOfPassengers } = flightContext;

    const [departureAirport, setDepartureAirport] = useState(null);
    const [arrivalAirport, setArrivalAirport] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [passengers, setPassengers] = useState(1);

    const airports = ['Los Angeles International Airport', 'John F. Kennedy International Airport', 'Chicago', 'San Francisco', 'Miami (MIA)'];

    const handleSearch = async () => {
      try {
          // Ensure all fields are filled
          if (!departureAirport || !arrivalAirport || !departureDate || !returnDate || !passengers) {
              alert('Please fill all fields!');
              return;
          }

          // Construct data to send to the backend
          const data = {
              departureAirport:departureAirport,
              arrivalAirport:arrivalAirport,
              departureDate: departureDate.format('YYYY-MM-DD'), // Format date as string
              arrivalDate: returnDate.format('YYYY-MM-DD'), // Format date as string
              passengers
          };

          // Send data to backend
          const response = await axios.post('http://localhost:8080/flights/search', data);
          
          // Handle response (you might navigate, or do something with the response)
          //console.log(response.data);
        //   setnoOfPassengers(passengers);
        console.log(response.data);
          navigate('/flightSelect', { state: { flightData: response.data } });
      } catch (error) {
          console.error("An error occurred while sending data to the backend", error);
          // Handle error (show error message, etc.)
      }
    
  };



    
    return (
        <div className="search-panel">
            <div className="section">
                <Select 
                    prefixIcon={<FlightTakeoff />}
                    placeholder="From Where?"
                    onChange={setDepartureAirport}
                    value={departureAirport}
                >
                    {airports.map(airport => <Option key={airport} value={airport}>{airport}</Option>)}
                </Select>
            </div>
            <div className="section">
                <Select 
                    prefixIcon={<FlightLand />}
                    placeholder="Where To?"
                    onChange={setArrivalAirport}
                    value={arrivalAirport}
                >
                    {airports.map(airport => <Option key={airport} value={airport}>{airport}</Option>)}
                </Select>
            </div>
            <div className="section">
                <DatePicker 
                    placeholder="Depart" 
                    onChange={setDepartureDate} 
                    value={departureDate}
                />
            </div>
            <div className="section">
                <DatePicker 
                    placeholder="Return" 
                    onChange={setReturnDate} 
                    value={returnDate}
                />
            </div>
            <div className="section">
                <InputNumber 
                    prefix={<Person />}
                    min={1} 
                    value={noOfPassengers} 
                    onChange={setnoOfPassengers}
                    formatter={value => `${value} `}
                    parser={value => value.replace(' Passengers', '')}
                />
            </div>
            <Button type="primary" onClick={handleSearch}>Search</Button>
        </div>
    );
}

export default SearchPanel;
