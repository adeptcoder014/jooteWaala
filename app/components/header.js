"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'

export const Header = () => {


    return (
        <div className="header-container">

            <div className="logo-section">
                < Image
                    src={'/logo.png'}
                    width={42}
                    height={42}
                />
                <h1 style={{
                    fontSize: 14
                }}>
                    JottWalla
                </h1>

            </div>
            <div className="navigation">
                <Navigation />
            </div>
            <div className="login-cart">
                < Image
                    src={'/logo.png'}
                    width={42}
                    height={42}
                />
                <h1 style={{
                    fontSize: 14
                }}>
                    Login
                </h1>
            </div>

        </div>
    )
}