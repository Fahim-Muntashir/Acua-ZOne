import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import brand1logo from '@/assets/logobrand1.png'
import brand2logo from '@/assets/brandlogo2.png'
import brand3logo from '@/assets/brandlogo3.png'
import brand4logo from '@/assets/logobrand4.png'
import brand5logo from '@/assets/logobrand5.png'
import brand6logo from '@/assets/logobrand6.png'
import { IoMdCheckmark } from 'react-icons/io';
const State = () => {
    return (
        <section className='text-center my-10'>
            <Container
            >
                <div className=''>
                    <Image src={logo} className='mx-auto mb-3' width={130} height={200} alt='Logo'></Image>

                    <h2 className='text-3xl'>Trusted by <span className='font-bold'>100,000+ customers</span>  in  64 + cities</h2>

                    <div className='grid md:grid-cols-6 grid-cols-3 justify-between my-5'>
                        <Image src={brand2logo} width={130} height={200} alt='Logo'></Image>  <Image src={brand1logo} width={120} height={10} alt='Logo'></Image>

                        <Image src={brand3logo} width={130} height={200} alt='Logo'></Image>
                        <Image src={brand4logo} width={130} height={200} alt='Logo'></Image>
                        <Image src={brand5logo} width={130} height={200} alt='Logo'></Image>
                        <Image src={brand6logo} width={130} height={200} alt='Logo'></Image>
                    </div>

                    <div className='grid md:flex justify-center items-center font-bold gap-x-5'>
                        <p className='flex gap-x-2 justify-center items-center font-bold'>
                            <IoMdCheckmark className='text-green-400' /> <span className='text-primary'>  299+  </span>Farm</p>
                        <p className='flex gap-x-2 justify-center items-center'>
                            <IoMdCheckmark className='font-bold text-green-400' /><span className='text-primary'>  299+  </span>  Fish& Tree</p>
                        <p className='flex gap-x-2 justify-center items-center'>
                            <IoMdCheckmark className='font-bold text-green-400' /><span className='text-primary'>  299+  </span>Sell Last Month </p>
                        <p className='flex gap-x-2 justify-center items-center'>        <IoMdCheckmark className='font-bold text-green-400' /><span className='text-primary'>  299+  </span>Farm </p>
                        <p className='flex gap-x-2 justify-center items-center'>
                            <IoMdCheckmark className='font-bold text-green-400' /><span className='text-primary'>  299+  </span> Fish& Tree</p>
                    </div>

                    <div className='md:w-3/4 mx-auto mt-10'>
                        <hr />
                    </div>
                </div>
            </Container >
        </section >
    );
};

export default State;