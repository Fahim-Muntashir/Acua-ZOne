'use client'
import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import category1 from '@/assets/images/category/1.png'
import category2 from '@/assets/images/category/2.png'
import category3 from '@/assets/images/category/3.png'
import category4 from '@/assets/images/category/4.png'
import category5 from '@/assets/images/category/5.png'
import category6 from '@/assets/images/category/6.png'
import category7 from '@/assets/images/category/7.png'

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/react-splide/css';



const categoryData = [
    {
        name: 'Tree',
        imgUrl: category1,
    },
    {
        name: 'Fish',
        imgUrl: category2,
    },
    {
        name: 'Tree',
        imgUrl: category3,
    },
    {
        name: 'Tree',
        imgUrl: category4,
    },
    {
        name: 'Tree',
        imgUrl: category5,
    },
    {
        name: 'Medicine',
        imgUrl: category6,
    },
    {
        name: 'Koi Karp',
        imgUrl: category7,
    },
]

const category = () => {

    return (
        <section className='my-20'>
            <Container>
                <h1 className='text-5xl font-semibold text-center my-7 text-gray-700'>Choose The Best</h1>
                <div className='grid gap-5'>
                    <Splide options={{
                        rewind: true, breakpoints: {
                            640: {
                                perPage: 2,
                                gap: '.7rem'
                            },
                            480: {
                                perPage: 1,
                                gap: '.7rem'
                            },
                        }, autoScroll: true, perPage: 5, gap: 4, autoplay: true
                    }} aria-label="React Splide Example ">


                        {
                            categoryData.map((data) => (
                                <SplideSlide key={data.name}>
                                    <div>
                                        <Image width={400} height={400} alt='img' src={data.imgUrl} className='rounded-lg'></Image>
                                        <p className='font-bold text-sm text-center mt-3'>{data.name}</p>
                                    </div>

                                </SplideSlide>
                            ))
                        }


                    </Splide>
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">Prev</button>
                        <button className="splide__arrow splide__arrow--next">Next</button>
                    </div>

                </div>
                <div className='md:w-3/4 mx-auto mt-10'>
                    <hr />
                </div>
            </Container>

        </section>
    );
};

export default category;