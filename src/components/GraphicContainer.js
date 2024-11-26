import React, { useEffect, useState } from 'react'

const GraphicContainer = ({ image }) => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Function to check window width and set isMobileView state
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 440);
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
    const mobileview = isMobileView?'col-12':'col-6'
    return (
        <div className={`col-lg-4 col-md-4 col-sm-6 ${mobileview} mb-2`}>
           
            <img src={image} alt="" height={300} width={450} style={{ objectFit: "contain" , width :"100%"}} />

        </div>
    )
}

export default GraphicContainer
