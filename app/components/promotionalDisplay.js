"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { useState } from 'react';
import { DailyOfferInfo } from './dailyOfferInfo';
import { DailyOfferProduct } from './daiylOfferProduct';


export const PromotionalDisplay = () => {
    const [active, setActive] = useState(false)


    return (
        <>
            <div>
                <div className='PromotionalDisplay-container'>

                    <div className='PromotionalDisplay-product'
                    >
                        <h1>wew</h1>
                        <Image
                            className=''
                            style={{
                                // marginLeft: 88,
                                // position: 'absolute',
                                // left: '-8%',
                            }}
                            src={'/hero-product_1.png'}
                            width={300}
                            height={270}

                        />
                    </div>
                    {/* <div style={{
                        backgroundColor: "lightGreen"
                    }}> */}
                    <div className='PromotionalDisplay-description'>

                        <h1 style={{
                            width: '259px',
                            marginBottom: '5%'
                        }}>Get ready for summers</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam a nulla sed aliquam. Morbi ornare in justo mattis scelerisque. Suspendisse et tellus at justo
                        </p>
                    </div>
                    {/* </div> */}

                </div>
            </div>



        </>


    )
}