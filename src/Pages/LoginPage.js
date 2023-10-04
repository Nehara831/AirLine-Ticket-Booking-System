import React from 'react'
import './LoginPage.css';
import { Input, Checkbox, Button } from 'antd';



const Loginpage=({ onClose })=>{
    return(
       <>
              <div className='login-modal'>
                <div className='BottomText-right-aligned'> Sign up for Aero Lanka</div>
                <div className='TextShowBox'>
                  Aero Lanka is totally free to use. Sign up using your email address or phone number below to get started.
                </div>
                <div className='LoginTextBox'>
                  <Input placeholder="Email or Phone number" />
                  <Input.Password placeholder="Password" />
                </div>
          
                <div className='CheckboxContainer'>
                  <Checkbox id='termsCheckbox'>I agree to the terms and conditions</Checkbox>
                </div>
          
                <div className='Button' >
                  <Button type="primary" onClick={onClose}>Login</Button>
                </div>
          
               
              </div>
              </>
            );
          }
export default Loginpage;