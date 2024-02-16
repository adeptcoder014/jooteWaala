import React from 'react';
import Image from 'next/image'
// import ProductDisplayCard from './productDisplayCard';


const HeroCarousel = () => {
    return (
        <>

            {/* <div>

                <div className="hero-grid-item-scroller">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'space-between',
                        justifyContent: 'space-around',
                        gap: 8,
                        width: '100%',
                        marginBottom: 45



                    }}>


                        <div style={{
                            display: 'flex',
                            alignContent: 'center',
                            gap: 8,
                            height: 15,

                        }}>
                            <img
                                // className='hide-on-mobile'
                                style={{
                                    marginLeft: 88,
                                    position: 'absolute',
                                    top: '45%',
                                    left: '5%'
                                }}
                                src={'/hero-product_1.png'}
                                width={520}
                                height={470}

                            />

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

            <div className="hero-scroller">

                <img
                    // className='hide-on-mobile'
                    style={{
                        marginLeft: 88,
                        position: 'absolute',
                        bottom: '8%',
                        // left: '5%',
                    }}
                    src={'/hero-product_1.png'}
                    width={520}
                    height={470}

                />

                <div
                    style={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'space-around',

                        gap: 8,
                        height: 15,

                    }}
                >

                    <div style={{
                        display:'flex',
                        justifyContent:'space-around'
                    }}>


                        <div className='scroller'>
                        </div>
                        <div className='scroller'>
                        </div>
                        <div className='scroller'>
                        </div>

                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: 100,
                            // padding:5,
                        }}>

                        <div
                            onClick={() => {
                                console.log('hua ----');
                            }}
                            className='scroller-button'>
                            {/* <Image
                                src={'/left.svg'}
                                width={45}
                                height={45}

                            /> */}
                            {'<--'}

                        </div>
                        <div className='scroller-button'>
                            {/* <Image
                                src={'/right.svg'}
                                width={45}
                                height={45}

                            /> */}
                            {'-->'}
                        </div>
                    </div>

                </div>



            </div>


        </>
    );
};

export default HeroCarousel;
