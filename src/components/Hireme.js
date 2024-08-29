import React from 'react' 
import Photo from '../assets/photo2.png'

export default function Hireme() {
   
   
    return (
        <div className='container bg-success rounded-4'>
            <div className="row">
                <div className="col d-flex justify-content-start">
                    <img src={Photo} alt=""  />
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <button className='btn btn-primary rounded-pill fs-2 fst-italic '  style={{ height: "100px", width: "300px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}}> <i className='fa-solid fa-download'></i> Download CV</button>
                </div>

            </div>
        </div>
    )
}
