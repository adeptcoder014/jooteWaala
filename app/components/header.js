"use client"; // This is a client component 👈🏽


import Image from 'next/image'
import { Navigation } from './navigation'
import { LuHeart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { useEffect } from 'react';
import axios from 'axios';



export const Header = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:1337/sasone/papers', {
                // headers: {
                //   'Authorization': 'Bearer fd4a95440db8696c582d7f0869074f1f7290e2b2b8570377b6491ca86957abdc23f02f89a244b15ad3fd64aa3df25370ba5035b17ea36cb295f554baad8c1c7b1dc7e2fff0e458b8605be82674a87c4618d13519f7b8991a936a0c85fb3d1e06949e2f4e1f83ac171f5bd61a5cd42e4035a0bd79fcefb5a06be65637aead3e36',
                // },
              });
            // const result = await response.json();
            // setData(result);
            console.log('response --------',response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);





return (
    <div className='hide-on-mobile'> 

        <div className="header-container">

            <div className="logo-section">

                < Image
                    src={'/logo.png'}
                    width={42}
                    height={42}
                />
                <h1 style={{
                    'fontSize': '1.65rem',
                    'fontWeight': 'bolder',
                    color: 'gray'


                }}>
                    JooteWaala
                </h1>

            </div>
            <div className="navigation">
                <Navigation />
            </div>
            <div className="login-cart">
                <div className='login-icons'>

                    <LuHeart />
                </div>
                <div className='login-icons'>

                    <FiShoppingCart />
                </div>
                <div className='login-icons FFD873'>

                    <LuUser2 />
                </div>


                {/* < Image
                        src={'/login-cart.svg'}
                        width={150}
                        height={42}
                    /> */}
                {/* <LuHeart /> */}

            </div>

        </div>
    </div>
)
}