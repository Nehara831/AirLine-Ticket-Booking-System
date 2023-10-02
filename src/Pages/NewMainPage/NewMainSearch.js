// Import necessary components from Ant Design
import { Select, DatePicker, InputNumber } from 'antd';
import React, { useState } from 'react';
import './SearchPanel.css';
import DepartingIcon from './DepartingIcon';
import ArrivingIcon from './ArrivingIcon';
import PersonIcon from './PersonIcon'
const { Option } = Select;

function SearchPanel() {
  const [departureAirport, setDepartureAirport] = useState(null);
  const [arrivalAirport, setArrivalAirport] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState(1);

  const airports = ['New York (JFK)', 'Los Angeles (LAX)', 'Chicago (ORD)', 'San Francisco (SFO)', 'Miami (MIA)'];

  return (
    <div className="search-panel">
      <div className="section departing">
      <Select 
          placeholder={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DepartingIcon />
              <span style={{ marginLeft: '8px' }}>From Where?</span>
            </div>
          } 
          onChange={value => setDepartureAirport(value)}
          value={
            departureAirport ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <DepartingIcon />
                <span style={{ marginLeft: '8px' }}>{departureAirport}</span>
              </div>
            ) : undefined
          }
          dropdownMatchSelectWidth={false}
        >
          {airports.map(airport => <Option key={airport} value={airport}>{airport}</Option>)}
        </Select>
      </div>
      <div className="section arriving">
      <Select 
          placeholder={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DepartingIcon />
              <span style={{ marginLeft: '8px' }}>Where To?</span>
            </div>
          } 
          onChange={value => setArrivalAirport(value)}
          value={
            departureAirport ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrivingIcon />
                <span style={{ marginLeft: '8px' }}>{arrivalAirport}</span>
              </div>
            ) : undefined
          }
          dropdownMatchSelectWidth={false}
        >
          {airports.map(airport => <Option key={airport} value={airport}>{airport}</Option>)}
        </Select>
      </div>
      <div className="section depart-date">
        <DatePicker 
          placeholder="Depart" 
          onChange={(date, dateString) => setDepartureDate(date)} 
          value={departureDate}
        />
      </div>
      <div className="section return-date">
        <DatePicker 
          placeholder="Return" 
          onChange={(date, dateString) => setReturnDate(date)} 
          value={returnDate}
        />
      </div>
      <div className="section passengers">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PersonIcon />
          <InputNumber 
            min={1} 
            value={passengers} 
            onChange={value => setPassengers(value)}
            formatter={value => `${value} Passengers`}
            parser={value => value.replace(' Passengers', '')}
            style={{ marginLeft: '8px' }}  // Add some spacing between the icon and the input
          />
        </div>
      </div>
    
    </div>
  );
}

export default SearchPanel;
