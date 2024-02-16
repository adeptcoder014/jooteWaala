"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { useState } from 'react';
import HeroCarousel from './heroCarousel';


export const Hero = () => {
    const [active, setActive] = useState(false)

    console.log('----------------------', active);
    return (
        <>

            <div class="angry-grid">
                <div id="item-0">
                    <div className="hero-top-card">
                        <h1
                            className='responsive-hero-title'
                            style={{
                                // fontSize: '100px',
                                // textAlign: 'center',
                                // padding: 15
                            }}
                        >
                            Modern Leather Shoes
                        </h1>


                        <div style={{
                            display: 'flex',
                            alignContent: 'space-between',
                            justifyContent: 'space-between',
                        }}>

                            <Image
                                className='hide-on-mobile'
                                style={{
                                    marginLeft: 88,
                                    position: 'absolute',
                                    // left: '-8%',
                                }}
                                src={'/hero-product_1.png'}
                                width={520}
                                height={470}

                            />


                            <div className='grid-item-explore-more'>


                                <p
                                    style={{
                                        fontSize: 19,
                                        fontWeight: 300
                                    }}>
                                    Discover a curated collection of hadcrafted pieces of designed
                                    to transform your shoes comfort zone nd style to the next level


                                </p>
                                <div className='hero-button'>
                                    <p>

                                        Explore more
                                    </p>
                                </div>




                            </div>


                        </div>

                    </div>
                </div>
                {/* <div id="item-1">

                    <div className="hero-grid-item-scroller">
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            alignContent: 'space-between',
                            justifyContent: 'space-around',
                            gap: 8,


                        }}>


                            <div style={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 8,
                                height: 15,

                            }}>

                                <div className='scroller'>
                                </div>
                                <div className='scroller'>
                                </div>
                                <div className='scroller'>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: 150,
                                // padding:5,
                            }}>

                                <div onClick={() => {
                                    console.log('hua ----');
                                }} className='scroller-button'>
                                    <Image
                                        src={'/left.svg'}
                                        width={45}
                                        height={45}

                                    />

                                </div>
                                <div className='scroller-button'>
                                    <Image
                                        src={'/right.svg'}
                                        width={45}
                                        height={45}

                                    />

                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}
                <HeroCarousel />
                <div id="item-2">
                    <div class="hero-grid-item-discount grid-item-discount sm:none">
                        <div style={{
                        }}>
                            <h1 style={{
                                color: '#836A24'
                            }}>

                                Leather Handbag

                                50% OFF
                            </h1>

                            <div className='hero-button-2'>
                                <p>

                                    Explore more
                                </p>
                            </div>
                        </div>
                        <Image
                            src={'/handbag.png'}
                            width={220}
                            height={210}

                        />

                    </div>
                </div>
            </div>


        </>


    )
}