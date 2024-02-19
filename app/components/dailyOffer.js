"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { useState } from 'react';
import { DailyOfferInfo } from './dailyOfferInfo';
import { DailyOfferProduct } from './daiylOfferProduct';


export const DailyOffer = () => {
    const [active, setActive] = useState(false)

    console.log('----------------------', active);
    <style>

    </style>
    return (
        <>


            {/* <div className="dailyOffer-card-container">
                <div style={{
                    display: 'flex',

                }}>

                </div>
                <div className='dailyOffer-product-container'>
                </div>

            </div> */}

            <div className='dailyOffer-card-container'>
                    <DailyOfferInfo />
                    <DailyOfferProduct />
            </div>

            







        </>


    )
}