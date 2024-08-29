import React from 'react'
import Card from './Card'
export default function SubMain() {
    return (
        <>
            <div className=" container submain rounded relative " >

                <div>
                    <div className="">
                        <h2 className="fs-2 fw-bold  " style={{ color: "rgb(255, 119, 0)" }} > MY  <span className='text-white'>Projects</span></h2>

                        <div className="row">

                            <Card image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" techStack = "html css python mernstack react node express mongodb c++" title = "test"></Card>
                            <Card image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></Card>
                            <Card image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></Card>
                            <Card image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></Card>




                            {/* <Card></Card>
                           <Card></Card>
                           <Card></Card> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
