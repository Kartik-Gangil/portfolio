import React from 'react'
import TechCard from './TechCard'
import photo from '../assets/photo3.png'

export default function TechStack() {
  return (
    <div className='container '>
      <div className="row rounded-4 ">
        <div className="col col-lg-4">
          <h1 className='text-light'>My Skills</h1>
          <p className='text-light'>I used in my projects</p>
          <img src={photo} alt="" style={
            {
              position : 'absolute',
              zIndex: "10",
              marginTop: "-50px",
              marginLeft: "-130px",
              height: "500px",
              width: "auto",
              objectFit: "contain",

            }
          } />
          <div className="background" style={{ backgroundColor: "rgb(255, 119, 0)", height: "500px", width: "550px", zIndex: "0", marginLeft: "-130px", borderTopRightRadius: "50%", borderBottomRightRadius: "50%" }}></div>
         
        </div>
        <div className="col">
          <div className="row">
            <TechCard />
            <TechCard />
            <TechCard />
            <TechCard />
            <TechCard />
            <TechCard />
            <TechCard />
          </div>
        </div>

      </div>
    </div>
  )
}
