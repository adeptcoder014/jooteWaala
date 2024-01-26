"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'

export const Hero = () => {


    return (
        <div className='hero-container'>
            <div style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center'

            }}>

                <div class="hero-top-card">
                    <h1
                        style={{
                            fontSize: 100,
                            textAlign: 'center',
                            padding: 15
                        }}
                    >
                        Modern Leather Shoes
                    </h1>


                    <div className='hero-grid-container'>
                        <div id='hero-product'>
                            <Image
                                src={'/hero-product_1.png'}
                                width={520}
                                height={470}

                            />
                        </div>
                        <div style={{
                            padding: 90,
                            // backgroundColor: 'green',
                            width: 701,
                            height: 364
                        }}>
                            <p style={{
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
            <div style={{
                display: 'flex',
                alignContent: 'space-between',
                justifyContent: 'space-between',
                marginTop: 10

            }}>
                <div class="hero-grid-container">

                    <div class="hero-grid-item-scroller">
                        <div style={{
                            display: 'flex',
                            gap: 8,
                            height:15
                        }}>

                            <div className='scroller'>
                            </div>
                            <div className='scroller'>
                            </div>
                            <div className='scroller'>
                            </div>
                        </div>

                        <div style={{
                            display:'flex',
                            // justifyContent:'spa'
                        }}>

                            <div className='scroller-button'>
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
                    <div class="hero-grid-item">4</div>
                </div>
            </div>

        </div>

    )
}