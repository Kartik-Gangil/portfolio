import React, { useEffect, useState } from 'react'

export default function Card(props) {
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
    const mobileview = isMobileView?'col-12':'col-6'
    return (
        <div className={`col-lg-3 col-md-4 col-sm-6 ${mobileview} mb-2`}>

            <div className="card " style={{ height: isMobileView?400:350 }} >
                <img src={props.image} className="card-img-top" alt="" height={200} width={200} style={{ objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title ">{props.title}</h5>
                    <p className="card-text text-break">{props.techStack}</p>
                    <div className=" d-flex justify-content-between flex-sm-row flex-column align-items-center">
                        <p className='text-dark'>Source Code</p>
                        <div >
                            <a href={props.repo} className='fs-3 text-black'><i className='fa-brands fa-github'></i></a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <a href={props.host} className='fs-3 text-black'><i className='fa-solid fa-code'></i></a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
