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

            <div className="layout-container">

                <div className="dailyOffer-card-container">
                    <div style={{
                        // backgroundColor: 'green',
                        display: 'flex',
                        justifyContent: 'center',
                        width:'100%'
                    }}>

                        <DailyOfferInfo />
                    </div>
                    <div className='dailyOffer-product-container'>
                        <DailyOfferProduct />
                    </div>

                </div>



            </div>




        </>


    )
}