import React, { useEffect, useState } from 'react'

export default function Photo(props) {

    const imageStyle = {
        zIndex: 2,
        marginTop: "38.5vh",
        height: "500px",
        width: "1000px",
        objectFit: "contain",
    }
    const BgStyle = {
        backgroundImage: "linear-gradient(to top, black, #434343)",
        zIndex: 1,
        height: "600px", width: "600px",
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%",
        borderBottomRightRadius: "10% ",
        borderBottomLeftRadius: "10%",
        marginTop: "28.77vh"
    }
    const mobileViewBgStyle = {
        backgroundImage: "linear-gradient(to top, black, #434343)",
        zIndex: 1,
        height: "300px", width: "300px",
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%",
        borderBottomRightRadius: "10% ",
        borderBottomLeftRadius: "10%",
        marginTop: "28.77vh"
    }
    const mobileViewImage = {
        zIndex: 2,
        marginTop: "28.5vh",
        height: "300px",
        width: "500px",
        objectFit: "contain",
    }
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
        <div className='d-flex justify-content-center ' >
            <div className=" position-absolute  " style={isMobileView?mobileViewBgStyle:BgStyle}></div>
            <img src={props.photo} alt="" style={isMobileView ? mobileViewImage : imageStyle} />
        </div>

    )
}
