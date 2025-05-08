import React from 'react'
import Card from './Card'
export default function SubMain() {
    return (
        <>
            <div className=" container submain rounded relative " id="projects">

                <div>
                    <div className="" >
                        <h2 className="fs-2 fw-bold  mb-5" style={{ color: "rgb(255, 119, 0)" }} > MY  <span className='text-white'>Projects</span> <span>(TOP-4)</span></h2>

                        <div className="row">

                            <Card
                                image="https://podlm.ai/imgs/sections/1.png"
                                title="Pod LM"
                                techStack="Node js , Vite ,Express, Deepgram (Audio generation) , Gen AI"
                                repo="https://github.com/Kartikgupta666/mechnical-keyboard-utility-in-python.git"
                                host="#" />
                            <Card
                                image="https://r2.erweima.ai/i/V0YxVnrCRn216N6AsTh5zQ.png"
                                title="AI Github Readme Generator"
                                techStack="Node js , Vite ,Express, GitHub Integration (octokit/rest.js) , Gen AI"
                                repo="https://github.com/Kartikgupta666/AI-based-GITHUB-readme-generator.git"
                                host="https://geminie-integration-in-webhomepage.vercel.app/" />
                            <Card
                                image="https://www.saturdaygift.com/wp-content/uploads/Free-Expense-Tracker-Templates-Cute-Printables-SaturdayGift.jpg"
                                title="Expense Tracker"
                                techStack="MERN Stack , Mongodb , Express js , React js , Node js , HTML , CSS " repo="https://github.com/Kartikgupta666/Expense_Traker_app.git"
                                host="https://expense-traker-kartik-app.vercel.app/" />
                            <Card
                                image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png"
                                title="J.A.R.V.I.S"
                                techStack="Python , APIs" repo="https://github.com/Kartikgupta666/jarvis-using-pyton.git"
                                host="#" />


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
