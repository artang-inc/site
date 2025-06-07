import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const  Hero: React.FC = () => {
    return (
      <section
        id="hero"
        className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 min-h-[800px] overflow-hidden"
      >
        <Image
          src={heroDetails.centerImageSrc}
          width={1500}
          height={1200}
          quality={100}
          sizes="(max-width: 768px) 100vw, 1500px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="absolute top-32 md:top-40 left-0 right-0 bottom-0 z-0 w-full h-full object-cover opacity-30"
        />

        <div className="text-center relative py-20 z-10 gap-5">
          <h1 className="relative z-10 text-white text-4xl md:text-6xl leading-tight md:leading-none text-foreground max-w-lg md:max-w-4xl mx-auto exo font-normal whitespace-pre-line ">
            {heroDetails.heading}
          </h1>
          <p className="relative z-10 text-white mt-6 text-sm md:text-xl text-foreground  md:max-w-2xl mx-auto WorkSans font-light whitespace-pre-line">
            {heroDetails.subheading}
          </p>
          <div className="relative z-10 text-white mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto"></div>
        </div>
      </section>
    );
};

export default Hero;
