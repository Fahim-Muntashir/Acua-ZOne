import { Container } from '@mui/material';
import React from 'react';
import connectImg from '@/assets/images/water.png'
import Image from 'next/image';

const Contact = () => {
    return (
        <section>

            <Container>
                <div>
                    <h2>Get in touch</h2>
                    <p >Reach out, and lets create a universe of possibilities together!</p>
                </div>

                <div className='border border-3 border-gray-400 lg:p-5 md:grid md:grid-cols-2 gap-4'>
                    <div>
                        <h3>Lets connect With AcuaZone</h3>
                        <p>Lets align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
                        <form action="">
                            <div className='flex gap-x-4 w-full'>
                                <input type="text" placeholder='First Name' className='w-2/4' />

                                <input type="text" placeholder='Last Name' className='w-2/4' />
                            </div>
                            <div className='grid'>
                                <input type="email" placeholder='Email' className='w-full m' />
                                <input type="text" placeholder='Phone Number' />
                                <input type="text" placeholder='Message' />

                            </div>    <button className="bg-primary py-3 px-6 gap-3 mx-auto md:mx-0">
                                Get started free
                            </button>
                        </form>
                    </div>
                    <div>
                        <Image src={connectImg} ></Image>
                    </div>
                </div>
            </Container>
        </section >
    );
};

export default Contact;