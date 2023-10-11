import logo from './logo.svg';

import './App.css';
import LoginPage from './Pages/LoginPage'
import  NavigationHeader from './componenets/NavigationHeaderFolder/NavigationHeader';
import FlightSearch from './componenets/SearchFlights/Flights'
import Mainview from './Pages/MainView';
import Form from './Pages/Form';
import DepatingPage from './Pages/DepatingPage';
import FlightDataRow from './componenets/DepartingFlights/FlightDataRow'
import DepPage from './Pages/DepPage'
import DepRet from './Pages/DepReturnPage'
import SeatSelector from './Pages/SeatSelectorPage/SeatBooking';
import SeatSelectorHeader from './componenets/SeatSelectorHeader';
import UserRegister from './Pages/LoginPage/UserRegistration';
import RegChat from './Pages/LoginPage/RegChat'
import MultiplePassengers from './Pages/LoginPage/MultiplePassengers'

import SeatBookingPage from './Pages/SeatSelectorPage/SeatBookingPage';
import NewMainPage from './Pages/NewMainView/NewMainView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NewMainPage/>} exact />
          <Route path="/available-flights" element={<DepRet />} />
          <Route path="/seatSelector"  element={<SeatBookingPage/>} />
          <Route path="/passengerDetails/:totalPassengers"  element={<MultiplePassengers/>} />
          <Route path="/userSignUp"  element={<UserRegister/>} />

        </Routes>
      </div>
    </Router>

 
  );
}

export default App;

