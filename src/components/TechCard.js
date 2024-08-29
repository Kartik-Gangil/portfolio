import React from 'react'

export default function TechCard(props) {
    const measure = 100;
    return (
        <div className="col-lg-6">

            <div className="d-flex align-items-center gap-2 rounded px-5 py-4 ">
                <img className="rounded-circle" src={props.image} alt="" height={measure} width={measure} />
                <div>
                    <h3 style={{ color: "rgb(255, 119, 0)" }} >{props.title}</h3>
                    <p style={{ color: "white" }}>{props.level}</p>
                </div>
            </div>
        </div>
    )
}
