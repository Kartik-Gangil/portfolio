import React from 'react'

export default function Photo(props) {
    return (
        <div className='d-flex justify-content-center ' >
            <div className=" position-absolute  " style={{
                backgroundColor: "rgb(255, 119, 0)", zIndex: 10,
                height: "600px", width: "600px", borderTopLeftRadius: "100%", borderTopRightRadius: "100%", borderBottomRightRadius: "10% ", borderBottomLeftRadius: "10%"
                , marginTop: "200px"
            }}></div>
            <img src={props.photo} alt="" style={
                {
                    zIndex: 20,
                    marginTop: "250px",
                    height: "500px",
                    width: "1000px",
                    objectFit: "contain",

                }
            } />

        </div>
    )
}
