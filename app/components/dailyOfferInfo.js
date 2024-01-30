"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { useState } from 'react';


export const DailyOfferInfo = () => {


    return (
        <>



            <div className="dailyOffer-info">
                <h1>Daily Offer</h1>
                <p style={{
                    marginTop:35
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam a nulla sed aliquam. Morbi ornare in justo mattis scelerisque. Suspendisse et tellus at justo.</p>
                <div className='hero-button'>
                    <p>

                        Explore more
                    </p>
                </div>


            </div>

        </>


    )
}