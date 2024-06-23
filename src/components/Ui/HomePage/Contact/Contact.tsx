import { Container } from '@mui/material';
import React from 'react';
import connectImg from '@/assets/images/connect.png'
import Image from 'next/image';

const Contact = () => {
    return (
        <section>

            <Container>
                <div className='my-10'>
                    <h1 className='text-6xl font-bold text-center'>Get in <span className='text-gray-400'>touch</span></h1>
                    <p className='text-gray-500 w-42 text-center'>Reach out, and lets create a universe of possibilities together!</p>
                </div>

                <div className='border-2 rounded-2xl border-gray-100 md:p-10 md:grid md:grid-cols-2 gap-8'>
                    <div className='py-10'>
                        <h3 className='text-3xl font-bold'>Let&apos;s connect With <span className='text-primary'>AcuaZone</span></h3>
                        <p className='py-5 text-gray-500'>Lets align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
                        <form action="">
                            <div className='flex gap-x-4 w-full'>
                                <input type="text" placeholder='First Name' className='w-2/4' />

                                <input type="text" placeholder='Last Name' className='w-2/4' />
                            </div>
                            <div className='grid'>
                                <input type="email" placeholder='Email' className='w-full m' />
                                <input type="text" placeholder='Phone Number' />
                                <input type="text" placeholder='Message' />

                            </div>    <button className="bg-primary py-3 px-6 mt-8 text-white gap-3 mx-auto md:mx-0">
                                Get started free
                            </button>
                        </form>
                    </div>
                    <div className='ms-3 '>
                        <Image src={connectImg} width={480} height={536}></Image>
                    </div>
                </div>     <div className='md:w-3/4 mx-auto mt-20'>
                    <hr />
                </div>
            </Container>
        </section >
    );
};

export default Contact;