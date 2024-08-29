import React from 'react'
import './Navbar.css'
export default function Navbar() {

    return (
        <>
        
            <nav className='d-flex justify-content-center '>

                <div >
                    <ul className='d-flex text-white gap-4 my-3 justify-content-center rounded-pill px-2 py-1 ' style={{ backgroundColor: "black" , listStyle:"none"}}>
                        <li className='list px-2 py-2'>Home</li>
                        <li className='list px-2 py-2'>Aboutme</li>
                        <li className='list px-2 py-2'>Service</li>
                        <li className='list px-2 py-2'>KARTIK</li>
                        <li className='list px-2 py-2'><a href="https://drive.google.com/file/d/1N9fs4N5FaBzexjJF3qPbqU3ETorkz4Qq/view?usp=sharing" download style={{textDecoration: "none" , color : "white"}}>Resume</a></li>
                        <li className='list px-2 py-2'>Projects</li>
                        <li className='list px-2 py-2'>Contact</li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
