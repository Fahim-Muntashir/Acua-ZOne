import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import hightLight1 from '@/assets/images/highlight1.png'
import hightLight2 from '@/assets/images/highlight2.png'

const HeroSection = () => {
    return (
        <div>
            <section className="relative flex h-[80vh] overflow-hidden items-center justify-center">
                <Container>
                    <div className="relative z-30 flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
                        <div className="text-white rounded-xl text-center md:text-left mb-6 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Acuazone: Connecting Fish <br /> Farmers, Sellers, and You - <br /> Seamlessly.
                            </h1>
                            <p className="my-5 text-gray-300">
                                With stellar one-click reports and unmatched support, see how <br className="hidden md:inline" /> Circle will make a difference in your business.
                            </p>
                            <button className="bg-primary py-3 px-6 flex items-center justify-center gap-3 mx-auto md:mx-0">
                                Get started free <FaChevronRight />
                            </button>
                        </div>
                        <div className="relative hidden md:block">
                            <Image
                                className="top-40 right-40 border-4 rounded-lg border-white"
                                src={hightLight1}
                                width={290}
                                height={261}
                                alt="Highlight 1"
                            />
                            <Image
                                src={hightLight2}
                                className="absolute top-40 right-40 border-4 rounded-lg border-white"
                                width={290}
                                height={261}
                                alt="Highlight 2"
                            />
                        </div>
                    </div>
                </Container>

                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-full h-full object-cover"
                >
                    <source
                        src="https://videos.pexels.com/video-files/6120410/6120410-hd_1280_720_30fps.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </section>
        </div>

    );
};

export default HeroSection;