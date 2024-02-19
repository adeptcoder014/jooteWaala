"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { LuHeart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";



export const Header = () => {


    return (
        <div className='hide-on-mobile'>


            <div className="header-container">

                <div className="logo-section">

                    < Image
                        src={'/logo.png'}
                        width={42}
                        height={42}
                    />
                    <h1 style={{
                      'fontSize': '1.65rem',
                      'fontWeight': 'bolder',
                      color: 'gray'


                    }}>
                        JooteWaala
                    </h1>

                </div>
                <div className="navigation">
                    <Navigation />
                </div>
                <div className="login-cart">
                    <div className='login-icons'>

                        <LuHeart />
                    </div>
                    <div className='login-icons'>

                        <FiShoppingCart />
                    </div>
                    <div className='login-icons FFD873'>

                        <LuUser2 />
                    </div>


                    {/* < Image
                        src={'/login-cart.svg'}
                        width={150}
                        height={42}
                    /> */}
                    {/* <LuHeart /> */}

                </div>

            </div>
        </div>
    )
}