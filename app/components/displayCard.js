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

export const DisplayCard = () => {
    const [active, setActive] = useState(false)

    console.log('----------------------', active);
    return (
        <div className='display-card-container'>
            
            {displayCardData.map(x => (

                <div
                    className={active ? 'active-display-card' : 'display-card'}
                    onClick={() => { setActive((previousState) => !previousState) }}
                >
                    <div className='display-card-image'>
                        <Image src={'/belt-icon.png'} width={100} height={70} />
                    </div>
                    <div style={{ marginTop: 15 }}>
                        <h2>{x.title}</h2>
                    </div>
                </div>
            ))}


        </div>

    )
}