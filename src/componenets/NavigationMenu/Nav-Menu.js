import React from 'react'
import './Nav-Menu.css'
const NavigationMenu=()=>{
    return(
        <div class="nav-Menu"> 
        <div class="nav-Menu-Item">
            <button class="nav-Menu-Button">Flights</button>
        </div>
        <div class="nav-Menu-Item">
            <button class="nav-Menu-Button">Hotels</button>
        </div>
        <div class="nav-Menu-Item">
            <button class="nav-Menu-Button">Packages</button>
        </div>
        <div class="nav-Menu-Item">
            <button class="nav-Menu-Button">Sign In</button>
        </div>
        <div class="nav-Menu-Item">
            <button class="nav-Menu-Button">Sign Up</button>
        </div>
    </div>
    



    );
}

export default NavigationMenu;