import React, { useEffect, useState } from 'react'



export default function Main() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Function to check window width and set isMobileView state
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 440);
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
        <>
            <div className="main d-flex justify-content-center position-relative top-5 " >
                <button className='border border-black text-black rounded-pill px-2 ' style={{ maxWidth: "41", maxHeight: "94", cursor: "none" }}>Hello!</button>
                <div className="submain position-absolute my-4 text-center  ">
                    <p className=' text-light' style={{ fontSize: isMobileView ? '30px' : '55px' }}><span style={{ color: "rgb(255, 119, 0)", fontWeight: "bold" }}> I'</span>m <span style={{ color: "rgb(255, 119, 0)", fontWeight: "bold" }}> Kartik</span> , <br />
                        Software Engineer</p>

                </div>
            </div >


        </>
    )
}
