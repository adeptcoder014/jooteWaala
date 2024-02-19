"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { useState } from 'react';


export const DailyOfferProduct = () => {


    return (
        <>

            <div className='daily-Offer-Product'>


                <div className="dailyOffer-product">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        // backgroundColor: 'white',
                        alignItems: 'center',
                        marginTop: 10


                    }}>

                        <h2 style={{
                            alignItems: 'center'
                        }}>Belts</h2>
                        <div className='discount-circle'>
                            30% OFF
                        </div>
                    </div>
                    <div className='image-container'>

                        <Image
                            src={'/belt.png'}
                            width={200}
                            height={180}

                        />
                    </div>
                </div>

                <div className="dailyOffer-product-1">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        // backgroundColor: 'white',
                        alignItems: 'center',
                        marginTop: 10


                    }}>

                        <h2 style={{
                            alignItems: 'center'
                        }}>Purses</h2>
                        <div className='discount-circle'>
                            60% OFF
                        </div>
                    </div>
                    <div className='image-container'>

                        <Image
                            src={'/purse.png'}
                            width={200}
                            height={180}

                        />
                    </div>
                </div>
            </div>
        </>


    )
}