import React from 'react'

export default function Footer() {
    return (
        <div className='bg-dark position-relative b-0'>
            <footer className="d-flex flex-wrap justify-content-evenly align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                  
                    <span className="mb-3 mb-md-0 fs-5 fw-bold text-white">KartikGangil@gmail.com</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex  ">
                    <li className="ms-3 fs-3"><a className="text-body-secondary text-black" target='blank' href="https://github.com/Kartikgupta666"><i className='fa-brands fa-github'></i></a></li>
                    <li className="ms-3 fs-3"><a className="text-body-secondary text-primary" target='blank' href="https://www.linkedin.com/in/kartik-gangil/"><i className='fa-brands fa-linkedin'></i></a></li>
                    <li className="ms-3 fs-3"><a className="text-body-secondary text-danger" target='blank' href="https://www.youtube.com/@mr.webdeveloper656"><i className='fa-brands fa-youtube'></i></a></li>
                </ul>
            </footer>
        </div>
    )
}
