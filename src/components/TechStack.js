import React, { useEffect, useState } from 'react'
import TechCardAling from './TechCardAling'
import photo from '../assets/photo3.png'

export default function TechStack() {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    // Function to check window width and set isMobileView state
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1000);
    };

    // Run once on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <div className='container'>
      <div className="row rounded-4 ">
        <h1 className='text-light fw-bold'> <span style={{ color: "rgb(255, 119, 0) " }}>M</span>y  <span style={{ color: "rgb(255, 119, 0) " }}>S</span>kills</h1>
        <p className='text-light'>I used in my projects</p>
        {!isMobileView && (<div className="col col-lg-4">
          <img src={photo} alt="" style={
            {
              position: 'absolute',
              zIndex: "10",
              marginTop: "-50px",
              marginLeft: "-130px",
              height: "500px",
              width: "auto",
              objectFit: "contain",

            }
          } />
          <div className="background" style={{ backgroundColor: "rgb(255, 119, 0)", height: "500px", width: "550px", zIndex: "0", marginLeft: "-130px", borderTopRightRadius: "50%", borderBottomRightRadius: "50%" }}></div>

        </div>)}
        <div className="col">
        
          <TechCardAling/>
         
        </div>

      </div>
     
    </div>
  )
}
