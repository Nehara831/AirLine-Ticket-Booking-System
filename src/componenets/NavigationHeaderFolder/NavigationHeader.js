import React from 'react'
import './NavigatorHeader.css'
import NavMenu from 'C:/Projects/AirLine-Ticket-Booking-Application/booking/src/componenets/NavigationMenu/Nav-Menu'
const NavigationHeader=()=> {
    return (
        <div className="nav-header">
            <div className="nav-textItem">
            <div className="nav-text"> Aero Lanka
            </div>
            </div>
            <div className="nav-menu">
                <NavMenu/>
                
            </div>
        </div>

    );
  }

  export default NavigationHeader;