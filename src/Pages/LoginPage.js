import React , { useState } from 'react'
import './LoginPage.css';
import { Input, Checkbox, Button ,message } from 'antd';

import axios from 'axios';


const Loginpage=({ onClose })=>{
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
const handleLogin = async () => {
  try {
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', credentials);
      // Handle success
      message.success('Login successful!');
      // Save the token securely and/or manage the user session
  } catch (error) {
      // Handle error
      message.error('Login failed. Please check your credentials.');
  }
 
};
const handleButtonClick = () => {
  handleLogin();
  onClose();
};
    return(
       <>
              <div className='login-modal'>
                <div className='BottomText-right-aligned'> Sign up for Aero Lanka</div>
                <div className='TextShowBox'>
                  Aero Lanka is totally free to use. Sign up using your email address or phone number below to get started.
                </div>
                <div className='LoginTextBox'>
                  <Input  placeholder="Email or Phone number"  
                  name="username" />
                  <Input.Password  
                  placeholder="Password" 
                        name="password"
                        onChange={handleChange}/>
                </div>
          
                <div className='CheckboxContainer'>
                  <Checkbox id='termsCheckbox'>I agree to the terms and conditions</Checkbox>
                </div>
          
                <div className='Button' >
                  <Button type="primary" onClick={handleButtonClick}>Login</Button>
                  
                </div>
          
               
              </div>
              </>
            );
          }
export default Loginpage;