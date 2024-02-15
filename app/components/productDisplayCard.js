import React from 'react';
import Image from 'next/image'


const ProductDisplayCard = ({ styleObj }) => {
    console.log('styleObj ', styleObj);
    return (
        <>
            <div className="horizontal-scroll-content"
                style={{
                    backgroundColor: styleObj.color,
                    flex: styleObj.flex,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '3%',
                    borderRadius: 16
                    // height: 470
                }}
            >

                <div style={{
                    display: 'flex',
                    alignContent: 'space-between',
                    justifyContent: 'space-between'
                }}>

                    <div >


                        <img
                            style={{
                                width: 48
                            }}
                            // className='productDisplayCarouselImage'
                            src={'/heartIcon.png'}
                        />
                    </div>
                    <div className='product-discount-circle'>
                        <p>-30%</p>

                    </div>
                </div>



                {/* Your content goes here */}
                <div style={{
                    display: 'block',
                    margin: 'auto',
                    width: '50%',
                    // backgroundColor:'red'

                }}>
                    <img
                        width={styleObj.imageResolution[0]}
                        height={styleObj.imageResolution[1]}
                        className='productDisplayCarouselImage'
                        src={'/hero-product_1.png'}
                    />

                    {/* <Image
                        className=''
                        style={{
                            // marginLeft: 88,
                            // position: 'absolute',
                            // left: '-8%',
                        }}
                        src={'/hero-product_1.png'}
                        width={300}
                        height={270}

                    /> */}
                </div>
                <div style={{
                    display: 'flex',
                    alignContent: 'space-between',
                    justifyContent: 'space-between',
                    // backgroundColor: 'green',
                    // alignItems:'baseline'
                }}>

                    <div>


                        <p class='text-sm md:text-xl'>
                            Brown leather shoes #2524
                        </p>
                        <p >
                            $ 150
                        </p>
                    </div>
                    <img
                        style={{
                            width: 48
                        }}
                        className='productDisplayCarouselImage'
                        src={'/cartIcon.svg'}
                    />
                </div>
            </div>
        </>

    );
};

export default ProductDisplayCard;
