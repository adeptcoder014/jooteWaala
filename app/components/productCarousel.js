import React from 'react';
import Image from 'next/image'
import ProductDisplayCard from './productDisplayCard';


const Scroller = () => {
    return (
        <>

                <div className="horizontal-scroll-container">


                    <ProductDisplayCard
                        styleObj={{
                            color: "#FDEDD6",
                            flex: 2,
                            imageResolution: [300, 250]
                        }}
                    />
                    <ProductDisplayCard
                        styleObj={{
                            color: "#F5F5F5",
                            flex: 1,
                            imageResolution: [150, 150]
                        }}
                    />
                    <ProductDisplayCard
                        styleObj={{
                            color: "#F5F5F5",
                            flex: 1,
                            imageResolution: [150, 150]
                        }}
                    />
                </div>

            <div className="horizontal-scroll-container">
                <ProductDisplayCard
                    styleObj={{
                        color: "#FDEDD6",
                        flex: 2,
                        imageResolution: [300, 250]
                    }}
                />
                <ProductDisplayCard
                    styleObj={{
                        color: "#F5F5F5",
                        flex: 1,
                        imageResolution: [150, 150]
                    }}
                />
                <ProductDisplayCard
                    styleObj={{
                        color: "#F5F5F5",
                        flex: 1,
                        imageResolution: [150, 150]
                    }}
                />

            </div>
        </>
    );
};

export default Scroller;
