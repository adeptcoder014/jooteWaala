"use client"; // This is a client component 👈🏽

import { useEffect } from "react"
import ProductDisplayCard from "./productDisplayCard"
import axios from "axios"

export const DemoComponent = () => {

    return (

        <>
            <div className='latest-arrivals-heading-container'>

                <h1
                    style={{
                        'fontSize': '2.65rem',
                        'color': 'black',
                        'fontWeight': 'bolder',
                    }}
                >Our latest arrivals</h1>
                <p
                    style={{
                        // 'fontSize': '2rem',
                        fontWeight: 'lighter',
                        color: '#575757',
                        fontWeight: 'bolder',
                    }}
                >Introducing our latest and best arrivals - value for money </p>
            </div >
            <div className="demo-grid">
                <div className="center">


                    <div className="demo-grid-item">

                        <ProductDisplayCard
                            styleObj={{
                                color: "#FDEDD6",
                                width: 600,
                                flex: 2,
                                imageResolution: [300, 250]
                            }}
                        />
                    </div>


                </div>
                <div className="center">

                    <div className="demo-grid-item">

                        <ProductDisplayCard
                            styleObj={{
                                color: "#F5F5F5",
                                width: 400,
                                flex: 2,
                                imageResolution: [300, 250]
                            }}
                        />                    </div>
                </div>
                <div className="center">

                    <div className="demo-grid-item">

                        <ProductDisplayCard
                            styleObj={{
                                color: "#F5F5F5",
                                width: 400,
                                flex: 2,
                                imageResolution: [300, 250]
                            }}
                        />
                    </div>


                </div>
            </div >

            <div className="demo-grid">
                <div className="center">


                    <div className="demo-grid-item">

                        <ProductDisplayCard
                            styleObj={{
                                color: "#FDEDD6",
                                width: 600,
                                flex: 2,
                                imageResolution: [300, 250]
                            }}
                        />
                    </div>


                </div>
                <div className="center">

                    <div className="demo-grid-item">

                        <ProductDisplayCard
                            styleObj={{
                                color: "#F5F5F5",
                                width: 400,
                                flex: 2,
                                imageResolution: [300, 250]
                            }}
                        />                    </div>
                </div>
                <div className="center">

                    <div className="demo-grid-item">

                        <ProductDisplayCard
                            styleObj={{
                                color: "#F5F5F5",
                                width: 400,
                                flex: 2,
                                imageResolution: [300, 250]
                            }}
                        />
                    </div>


                </div>
            </div >









        </>


    )

}