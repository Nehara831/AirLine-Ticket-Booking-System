// src/components/LoginPage.js
import React from 'react';
import SearchPanel from '../NewMainPage/NewMainSearch';
import './NewMainView.css';
import NavigationPanel from '../../componenets/NavigationHeaderFolder/NavigationHeader';
function LoginPage() {
  return (
    <div className="login-page">
      <nav className="navigation-panel">
       <NavigationPanel/>
      </nav>
      <div className="background-image">
        <SearchPanel />
      </div>
    </div>
  );
}

export default LoginPage;
