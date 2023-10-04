import React from 'react'
import './NavigatorHeader.css'
import NavMenu from '../NavigationMenu/Nav-Menu'
const NavigationHeader=({clicKSignInButton,clicKSignUpButton})=> {
    return (
        <div className="nav-header">
            <div className="nav-textItem">
            <div className="nav-text"> Aero Lanka
            </div>
            </div>
            <div className="nav-menu">
                <NavMenu clicKSignIn={clicKSignInButton} clicKSignUp={clicKSignUpButton}/>
                
            </div>
        </div>

    );
  }

  export default NavigationHeader;