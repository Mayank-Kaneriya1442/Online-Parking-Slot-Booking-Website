import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Animate = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(elementRef.current, {
            strings: ['Reserve Parking Space in a Click.', 'Book Your Parking Spot Online.', 'Park Your Car.', 'Easy Parking Booking.', '24*7 customer support.'],
            typeSpeed: 50,
            loop: true,
            backSpeed: 30,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='animatediv'>
            <span></span>
            <span ref={elementRef} />
        </div>
    );
};

export default Animate;