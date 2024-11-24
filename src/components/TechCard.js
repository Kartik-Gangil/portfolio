import React, { useEffect, useState } from 'react'

export default function TechCard(props) {
    
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
    const measure = isMobileView? 50:100;
    return (
        <div className="col-lg-6">

            <div className="d-flex align-items-center gap-2 rounded py-2 ">
                <img className="rounded-circle" src={props.image} alt="" height={measure} width={measure} />
                <div>
                    <p style={{ color: "rgb(255, 119, 0)", fontSize: "calc(1.5vw + 1vh)" , marginBottom : "0px" , fontWeight : "bold" }} >{props.title}</p>
                    <p style={{ color: "white", fontSize: "calc(1.5vw + 1vh)-0.2" }}>{props.level}</p>
                </div>
            </div>
        </div>
    )
}
