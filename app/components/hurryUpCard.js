

"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import ProductDisplayCard from './productDisplayCard';
import CountdownTimer from './CountdownTimer ';
import React, { useState, useEffect } from 'react';


export const HurryUpCard = () => {

    // ==========================================================
    const CountdownTimer = ({ targetTime }) => {
        const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

        function calculateTimeRemaining() {
            const now = new Date().getTime();
            const target = new Date(targetTime).getTime();
            const difference = target - now;


            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                console.log(' days, hours, minutes, seconds -----------', days, hours, minutes, seconds);
                return { days, hours, minutes, seconds };
            } else {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
        }

        useEffect(() => {
            const timerInterval = setInterval(() => {
                setTimeRemaining(calculateTimeRemaining());
            }, 1000);

            // Cleanup the interval on component unmount
            return () => clearInterval(timerInterval);
        }, [targetTime]);

        return (
            <div>
                {/* <p>Time Remaining:</p> */}
                <h1>{timeRemaining.days}d: {' '}{timeRemaining.hours}h: {timeRemaining.minutes}m: {timeRemaining.seconds}s</h1>
            </div>
        );
    };

    // ============================================================

    const targetTime = new Date('2024-02-07T23:59:59').getTime();

    return (
        <>
            <div className='hurry-up-container'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: "center"
                    }}
                >

                    <h1>Spring Offer</h1>
                    <CountdownTimer targetTime={targetTime} />
                    <button className='hurry-up-btn'>
                        Visit page
                    </button>
                </div>
                <div>
                    <img
                        src={'/offerProduct.png'}
                    />
                </div>


            </div >
        </>
    );
};


