import React from 'react';
import WomanImg from '../img/woman_hero1.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around  h-full">
        <div className=''>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
            <div>New trend</div>
          </div>
          <h1 className='text-[90px] leading-[1.1] font-light mb-4'>AUTUMN SALE<br/> STYLISH<br/>
          <span className='font-semibold text-[#00ADB5]'>WOMENS</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
          Discover more
          </Link>
        </div>
        <div className='hidden lg:block w-[705px]'>
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
