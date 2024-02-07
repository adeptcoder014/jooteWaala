"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { useState } from 'react';
import Scroller from './productCarousel';


export const LatestArrivals = () => {


    return (
        <>


            <div className='latest-arrivals-container'>
                <div className='latest-arrivals-heading-container'>

                    <h1>Our latest arrivals</h1>
                    <p>Introducing our latest and best arrivals - value for money </p>
                </div>

                <Scroller />
                <div style={{
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'center'
                }}>

                    <button className='open-store-btn'>
                        <p>Open Store</p>
                    </button>
                </div>
            </div>

        </>


    )
}