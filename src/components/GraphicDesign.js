import React from 'react'
import GraphicContainer from './GraphicContainer'
import Ai_prompt from "../assets/Graphic_design_folder/Ai prompt.png"
import build from "../assets/Graphic_design_folder/build.png"
import creating_route_to_add_new_item from "../assets/Graphic_design_folder/creating route to add new item.png"
import fetching_all_items from '../assets/Graphic_design_folder/fetching all items.png'
import stream from '../assets/Graphic_design_folder/stream.png'
import solve_in_public from '../assets/Graphic_design_folder/solve in public.png'
const GraphicDesign = () => {
    return (
        <div className='container'>
            <h1 className='text-light fw-bold'> <span style={{ color: "rgb(255, 119, 0) " }}>M</span>y  <span style={{ color: "rgb(255, 119, 0) " }}>D</span>esigns</h1>
            <div className="row ">
                <GraphicContainer image={Ai_prompt} />
                <GraphicContainer image={build} />
                <GraphicContainer image={creating_route_to_add_new_item} />
                <GraphicContainer image={fetching_all_items} />
                <GraphicContainer image={stream} />
                <GraphicContainer image={solve_in_public} />
            </div>
        </div>

    )
}

export default GraphicDesign
