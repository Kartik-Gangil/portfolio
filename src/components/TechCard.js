import React from 'react'

export default function TechCard() {
    const measure = 100;
    return (
        <div className="col-lg-6">

            <div className="d-flex align-items-center gap-2 rounded px-5 py-4 ">
                <img className="rounded-circle" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" height={measure} width={measure} />
                <div>
                    <h3 style={{color : "rgb(255, 119, 0)"}} >Leslie Alexander</h3>
                    <p  style={{color : "white"}}>Co-Founder / CEO</p>
                </div>
            </div>
        </div>
    )
}
