// src/components/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

import SearchPanel from '../NewMainPage/NewMainSearch';
import './NewMainView.css';
import NavigationPanel from '../../componenets/NavigationHeaderFolder/NavigationHeader';
function LoginPage() {

  const navigate = useNavigate();

  const handleSearch = () => {

    navigate('/available-flights');
  };
  return (
   

    <div className="login-page">
      <nav className="navigation-panel">
       <NavigationPanel/>
      </nav>
      <div className="background-image">
      <SearchPanel onSearch={handleSearch} />      
      </div>
    </div>
  );
}

export default LoginPage;
