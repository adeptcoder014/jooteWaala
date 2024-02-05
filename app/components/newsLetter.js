import React from 'react';
import Image from 'next/image'
import ProductDisplayCard from './productDisplayCard';


export const NewsLetter = () => {
    return (
        <>
            <div className='news-letter-container'>
                <h2 style={{
                    textAlign: 'center'
                }}>Subscribe to our newsletter and


                    <br />
                    grab <strong>30% OFF!</strong>

                </h2>

                <div
                    style={{
                        backgroundColor: 'red',
                        // width: '22%',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 50
                    }}
                >
                    <img
                        className='hide-on-mobile'
                        width={75}
                        // width={styleObj.imageResolution[0]}
                        // height={styleObj.imageResolution[1]}
                        // className='productDisplayCarouselImage'
                        src={'/letterIcon.png'}
                    />
                    <input
                        className='news-letter-input'
                        placeholder='Your email ...'
                    />
                    <button className='news-letter-btn'>
                        Subscribe
                    </button>
                </div>
            </div >
        </>
    );
};


