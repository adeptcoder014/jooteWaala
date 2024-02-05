// "use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const target = new Date(targetTime).getTime();
        const difference = target - now;

        console.log('difference -----------', difference);

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

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
            <h1>{timeRemaining.days} days, {timeRemaining.hours} hours, {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds</h1>
        </div>
    );
};

export default CountdownTimer;
