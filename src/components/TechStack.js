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
            <TechCard image="https://img.icons8.com/color/200/html-5.png" title="HTML" level="Advanced" />
            <TechCard image="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png" title="CSS " level="advanced" />
            <TechCard image="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png" title="Bootstrap" level="advanced" />
            <TechCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtIBh16qgbk0d1Mx6igGHrMGL3_IdQKcMXw&s" title="Tailwind" level="advanced" />
            <TechCard image="https://cdn.iconscout.com/icon/premium/png-256-thumb/mongodb-5363123-4488912.png?f=webp&w=256" title="Mongodb" level="Intermediate" />
            <TechCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHn3MVLQfIzzoVVMGmxr-80bmn-07IPduPGw&s" title="Firebase " level="Intermediate" />
            <TechCard image="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" title="C++ " level="Intermediate" />
            <TechCard image="https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png" title=" JavaScript" level="Intermediate" />
            <TechCard image="https://cdn.iconscout.com/icon/premium/png-256-thumb/mern-stack-5363121-4488910.png" title="MERN Stack" level="Intermediate ++ " />
            <TechCard image="https://freelogopng.com/images/all_img/1656733807canva-icon-png.png" title="Canva" level="Intermediate ++ " />
            <TechCard image="https://w7.pngwing.com/pngs/911/515/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png" title="Figma" level="Intermediate ++ " />
            <TechCard image="https://e7.pngegg.com/pngimages/447/294/png-clipart-python-javascript-logo-clojure-python-logo-blue-angle-thumbnail.png" title="Python" level="Intermediate  " />

            
            
          </div>
        </div>

      </div>
    </div>
  )
}
