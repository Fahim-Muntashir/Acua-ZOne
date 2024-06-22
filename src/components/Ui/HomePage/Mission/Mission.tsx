import { Container } from '@mui/material';
import React from 'react';
import img1 from '@/assets/images/familyOnBeach.png';
import img2 from '@/assets/images/water.png';
import Image from 'next/image';
import icon2 from '@/assets/icons/Frame 81.png'


const Mission = () => {
    return (
        <section>
            <Container>
                <div className='md:grid grid-cols-2 my-20'>

                    <div className='w-3/4 grid mx-auto md:mx-0'>
                        <div className='w-full mb-3'>
                            <Image className='rounded-xl' src={img2} width="full" height="300"
                            ></Image>
                        </div>

                        <div className='grid gap-x-3 grid-cols-2'>
                            <Image className='rounded-xl' src={img1} width="250" height="300"
                            ></Image>

                            <Image className='rounded-xl font-bold' src={img1} width="250" height="250"
                            ></Image>

                        </div>


                    </div>

                    <div className='flex flex-col justify-center '>
                        <h1 className='text-5xl mb-2'>Mission we <br />
                            are working on</h1>

                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                            <br />
                            <br />
                            Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>

                        <div className='grid grid-cols-2 mt-5'>
                            <div className='flex  items-center gap-x-4'>
                                <Image width={30} height={30} src={icon2} alt="" />
                                <p className='font-bold'>Organic making</p>
                            </div>
                            <div className='flex  items-center gap-x-4'>
                                <Image width={30} height={30} src={icon2} alt="" />
                                <p className='font-bold'>Organic making</p>
                            </div>
                            <div className='flex items-center gap-x-4 mt-3'>
                                <Image width={30} height={30} src={icon2} alt="" />
                                <p className='font-bold'>Organic making</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-3/4 mx-auto mt-10'>
                    <hr />
                </div>
            </Container>

        </section>
    );
};

export default Mission;