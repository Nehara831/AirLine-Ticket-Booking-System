import React , { useState } from 'react'
import {useFlight} from '../Pages/NewMainView/UserContext';
import './LoginPage.css';
import { Input, Checkbox, Button ,message } from 'antd';
import { useContext } from 'react';

import axios from 'axios';


const Loginpage=({ onClose })=>{

  const { userId, setUserId } = useFlight();

  const [choice,setChoice]=useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
});
const handleChange = (e) => {
  setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
  });
};
const handleLogin = async (event) => {
  event && event.preventDefault(); 
  console.log(credentials); 
  try {
      const response = await axios.post('http://localhost:8080/users/login', credentials);
          // Handle success
      message.success('Login successful!');
      // Set userId in context
      setUserId(response.data.userId);
      
      
  } catch (error) {
      // Handle error
      message.error('Login failed. Please check your credentials.');
  }
 
};
const handleButtonClick = () => {
 handleLogin();
  onClose();
};

const handleCheckboxChange= () => {
 setChoice(true);
 };
    return(
       <>
              <div className='login-modal'>
                <div className='BottomText-right-aligned'> Sign up for Aero Lanka</div>
                <div className='TextShowBox'>
                <p>Aero Lanka is totally free to use.</p> 
        <p>Sign up using your email address or phone number below to get started.</p>
                </div>
                
                <div className='LoginTextBox'>
                  <Input  placeholder="Email or Phone number"  
                  name="username"  
                  onChange={handleChange}/>
                  <Input.Password  
                  placeholder="Password" 
                        name="password"
                        onChange={handleChange}/>
                </div>
          
                <div className='CheckboxContainer'>
                  <Checkbox id='termsCheckbox' onChange={handleCheckboxChange}>I agree to the terms and conditions</Checkbox>
                </div>
          
                <div className='Button' >
                  <Button type="primary" onClick={handleButtonClick} disabled={!choice}>Login</Button>
                  
                </div>
          
               
              </div>
              </>
            );
          }
export default Loginpage;