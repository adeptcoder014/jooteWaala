"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'

export const Hero = () => {


    return (
        <>
            <div>
                {/* ============== HERO_TOP_CARD ====================================== */}

                {/* <div>
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


                </div> */}

                <div className='hero-grid'>
                    {/* ============== HERO_CAROUSEL_CARD ====================================== */}

                    <div>

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


                    </div>

                    {/* ============== DISCOUNT_CARD ====================================== */}
                    <div className="center">


                        {/* <div> */}

                        <div class="hero-grid-item-discount">
                            <div style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly'
                            }}>
                                <div>


                                    <h1 style={{
                                        color: '#836A24',
                                        fontWeight: 'bold',
                                        fontSize: 'xx-large'
                                    }}>
                                        Leather Handbag

                                    </h1>
                                    <h1 style={{
                                        color: '#836A24',
                                        fontWeight: 'bold',
                                        fontSize: 'xx-large'
                                    }}>

                                        50% OFF
                                    </h1>
                                </div>
                                <div className='hero-button-2'>
                                    <p> Explore more</p>
                                </div>
                            </div>
                            <img
                                style={{
                                    maxWidth: '100%'
                                }}
                                className='productDisplayCarouselImage'
                                src={'/handbag.png'}
                            />
                            {/* <Image
                                    src={'/handbag.png'}
                                    width={220}
                                    height={210}

                                /> */}

                        </div>


                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>

    )
}