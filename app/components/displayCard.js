"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { useState } from 'react';


const displayCardData = [{
    title: 'Shoes',
    image: '/belt.svg'
},
{
    title: 'Belt',
    image: '/belt.svg'
},
{
    title: 'Purse',
    image: '/belt.svg'
},
{
    title: 'Bracelet',
    image: '/belt.svg'
},
{
    title: 'Buckle',
    image: '/belt.svg'
}
]

export const DisplayCard = ({ title }) => {
    const [active, setActive] = useState(false)

    console.log('----------------------', active);
    return (
        <div className='display-card-container'>

            <div className='display-card'>
                <div className='center'>
                    <img
                        src={'/belt-icon.png'}

                        width={100}
                        height={65}
                    />
                </div>
                <div>
                    <h2
                        style={{
                            marginTop: '15px',
                            textAlign: 'center',
                            color: 'grey',
                            fontWeight: 700
                        }}>
                        {title}
                    </h2>
                </div>


            </div>



        </div >

    )
}