import React from 'react'



export default function Main() {
    return (
        <>
            <div className="main d-flex justify-content-center position-relative top-5 ">
                <button className='border border-black text-black rounded-pill px-2 ' style={{ maxWidth: "41", maxHeight: "94" ,cursor : "none"}}>Hello!</button>
                <div className="submain position-absolute my-4 text-center  ">
                    <h1 className=' text-light' style={{fontSize:"55px"}}>I'm <span style={{ color: "rgb(255, 119, 0)"}}> Kartik</span> , <br />
                        Software Engineer</h1>
                 
                </div>
            </div >


        </>
    )
}
