import React from 'react'
import './LoginPage.css';
import Nav from '../componenets/NavigationHeaderFolder/NavigationHeader'
import LoginTextBox from '../componenets/LoginTextBox/TextBox'
import Imag from '../asserts/Suitcases.png'
const Loginpage=()=>{
    return(
       
            // <div className='Login'>
            //     <div className='Nav'> <Nav/></div>
            //     <div className='main'>
            //         <div className='Bottom'>
            //             <div className='BottomText'>Create an Account</div>
            //             <div className='TextShowBox'>Aero Lanka is free to use as a guest, but if you create an account today, you can save and view flights, manage your trips, earn rewards, and more.</div>

            //             <LoginTextBox initialValue="Username"/>
            //             <LoginTextBox initialValue="Email"/>
            //             <LoginTextBox initialValue="Password"/>
                    
            //             <div className='Cancellation'>Cancellation Policy</div>
            //             <div className='TextShowBox'>
            //                 This flight has a flexible cancellation policy. If you cancel or change your flight up to 30 days before the departure date, you are eligible for a free refund. All flights booked on Tripma are backed by our satisfaction guarantee, however cancellation policies vary by airline. See the full cancellation policy for this flight.
                   
            //        </div>
                  
            //         <div className='BackImage'> </div>
               
            //         </div>
         


            // </div>
            // </div>


<div className='Outer'>
    <div className='BottomText' > Sign up for Aero Lanka</div>
    <div className='TextShowBox'> Aero Lanka  is totally free to use. Sign up using your email address or phone number below to get started.</div>
   <div className='LoginTextBox'><LoginTextBox initialValue="Email or Phone number"/>
    <LoginTextBox initialValue="Password"/></div>
    
    <div className='CheckboxContainer'>
        <input type='checkbox' id='termsCheckbox' />
        <label htmlFor='termsCheckbox'>I agree to the terms and conditions</label>
    </div>
    <div className='Button'>
        <div className='ButtonText'> Create Account</div>
    </div>

    <div></div>
    <div></div>
    <div></div>
    
    



</div>















    );
}
export default Loginpage;