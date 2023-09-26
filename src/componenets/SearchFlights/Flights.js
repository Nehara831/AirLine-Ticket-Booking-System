import React from 'react'
import './Flights.css'

const FlightBar= ()=>{
    return (
        <>
        <div className='flightSearchBar'> 
            <div className='flightSerachComponent'>
            <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08963 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z" fill="#6E7491"/>
                    </svg>
                </div>
                <div className='text'>From where?</div>
                <div></div>
            </div>
                

            
            <div className='flightSerachComponent' >
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3414 9.47906C7.07092 9.39117 6.78625 9.5672 6.74403 9.84845L6.2374 13.2232C6.16482 13.7067 6.45239 14.1717 6.9173 14.3228L24.1766 19.9306C24.983 20.1927 25.8492 19.7513 26.1113 18.9449C26.3837 18.1065 25.8959 17.2115 25.0438 16.9861L19.7321 15.5807L18.404 6.2075C18.3489 5.8186 18.0771 5.49504 17.7035 5.37367C17.0776 5.17027 16.4243 5.59908 16.3619 6.25431L15.6018 14.2386L8.34558 12.2961L7.64227 9.79231C7.60066 9.64416 7.48775 9.52661 7.3414 9.47906ZM26.1775 22.9524H5.64746V24.5316H26.1775V22.9524Z" fill="#6E7491"/>
                </svg>
            </div>
            <div className='text'>Where to?</div>
            </div>

            
            <div className='flightSerachComponent' >
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M10 5.77778C10 5.34822 10.5858 5 11 5C11.4142 5 12 5.34822 12 5.77778V7.33333H10V5.77778Z" fill="#6E7491"/>
                    <path d="M20 5.77778C20 5.34822 20.5858 5 21 5C21.4142 5 22 5.34822 22 5.77778V7.33333H20V5.77778Z" fill="#6E7491"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.33333H7.75C7.33579 7.33333 7 7.68156 7 8.11111V25.2222C7 25.6518 7.33579 26 7.75 26H24.25C24.6642 26 25 25.6518 25 25.2222V8.11111C25 7.68156 24.6642 7.33333 24.25 7.33333H22H20H12H10ZM23.5 12H8.5V24.4444H23.5V12Z" fill="#6E7491"/>
                    <path d="M10 15.5C10 14.6716 10.6716 14 11.5 14C12.3284 14 13 14.6716 13 15.5C13 16.3284 12.3284 17 11.5 17C10.6716 17 10 16.3284 10 15.5Z" fill="#6E7491"/>
                    <path d="M22 18.5C22 17.6716 21.3284 17 20.5 17C19.6716 17 19 17.6716 19 18.5C19 19.3284 19.6716 20 20.5 20C21.3284 20 22 19.3284 22 18.5Z" fill="#6E7491"/>
                </svg>
            </div>
            <div className='text'>Depart-Return</div>
            </div>

            
            <div className='flightSerachComponent' >
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="11" r="4" fill="#6E7491"/>
                    <path d="M10 24C8.89543 24 7.97435 23.0907 8.24685 22.0202C9.12788 18.5595 12.265 16 16 16C19.735 16 22.8721 18.5595 23.7531 22.0202C24.0257 23.0907 23.1046 24 22 24H10Z" fill="#6E7491"/>
                </svg>
            </div>
            <div className='text'>1 adult</div>
            </div>

            
            <div className='serachIcon' >
            
                <div className='searchText'>Search</div>
            </div>
                    
        </div>
       </>
    );
}

  export default FlightBar;

