
"use client"; // This is a client component 👈🏽

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
    {
        title: 'Home'
    },
    {
        title: 'About'
    },
    {
        title: 'Store'
    },
    {
        title: 'Blog'
    },
    {
        title: 'Sale'
    },
]


export const Navigation = () => {
    const router = useRouter()
    const [state, setState] = useState('home')
    console.log('----------', router.pathname);


    return (
        <div className="navigation-section">
            <div className="navigation-items-container">
                {navLinks.map(x => {
                    return (

                        <div className="navigation-items" >

                            <p>{x.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}