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
function App() {
  return (
    <div className="App">
      
    <DepRet/>
    </div>
  );
}

export default App;

