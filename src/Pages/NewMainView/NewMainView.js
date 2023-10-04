// src/components/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../LoginPage'
import SearchPanel from '../NewMainPage/NewMainSearch';
import './NewMainView.css';
import { useState } from 'react';

import NavigationPanel from '../../componenets/NavigationHeaderFolder/NavigationHeader';
function LoginPage() {

  
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isSignUpVisible, setSignUpVisible] = useState(false);
  
    const handleLoginClick = () => {
      setLoginVisible(true);
    };
    const handleSignUpClick = () => {
      navigate('/userSignUp');
    };
    const handleCloseLogin = () => {
      setLoginVisible(false);
    };
    ///////
    const handleCloseSignUp = () => {
      setSignUpVisible(false);
    };
  const navigate = useNavigate();

  const handleSearch = () => {

    navigate('/available-flights');
  };
  
  return (
   

    <div className="login-page">
    
      <nav className="navigation-panel">
        
       <NavigationPanel clicKSignInButton={handleLoginClick} clicKSignUpButton={handleSignUpClick}/>
      </nav>
      {isLoginVisible && <Login onClose={handleCloseLogin} />}

      <div className="background-image">
      <SearchPanel onSearch={handleSearch} />      
      </div>
    </div>
  );
}

export default LoginPage;
