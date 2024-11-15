/**
 * @typedef {import("@prismicio/client").Content.TopSlice} TopSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopSlice>} TopProps
 * @param {TopProps}
 */
'use client';

import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink } from '@prismicio/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

const Top = ({ slice }) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
const [progress ,setProgress] =useState(0);
 const onChange = (swiper)=>{
  setActiveIndex(swiper.activeIndex)
const newProgress = ((swiper.activeIndex)/(swiper.slides.length-1)*100);
setProgress(newProgress)
 }

  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <section className="bg-black h-full py-44">
        {/*for Mobile View */}
        <div className="block md:hidden">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={16}
            pagination={{ clickable: true }}
            onSlideChange={onChange}
           
            className="mySwiper"
          >
            {slice.primary.card.map((card, index) => (
              <SwiperSlide key={index} className='w-[300px]'>
                <div
                  className={`  bg-neutral-700 text-white shadow-lg border border-transparent p-10 flex flex-col justify-center items-center relative group transition-all duration-100 ${
                    index === activeIndex ? '  group transition-all duration-100 border-purple-500 bg-gradient-to-b from-neutral-700 to-purple-700 ' : ''
                  }`}
                >
                  <div className="flex mb-4">
                    <span
                      className={`text-sm ${card.availability ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {card.availability ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-6 text-center">{card.cardheading}</h2>
                  <div className="flex mb-10 text-center">
                    <div className="flex items-center gap-2 mx-4">
                      <span className="text-2xl font-semibold">{card.number_available_games}</span>
                      <span className="text-sm max-w-[120px] leading-4">Games Available</span>
                    </div>
                    <span className="h-[40px] w-[2px] bg-white"></span>
                    <div className="flex items-center gap-2 mx-4">
                      <span className="text-2xl font-semibold">{card.number_consoles}</span>
                      <span className="text-sm max-w-[120px] leading-4">Consoles Available</span>
                    </div>
                  </div>
                  <PrismicLink field={card.button} className="w-full block">
                    <button className="w-full bg-white text-black py-4 rounded-full transition-all duration-100 hover:bg-amber-200">
                      Rent now for {card.button.text}
                    </button>
                  </PrismicLink>
                  <PrismicLink href="tel:123456789" className="w-full block">
                    <p className="text-center mt-4 text-gray-300 underline cursor-pointer">
                      or book with a call
                    </p>
                  </PrismicLink>
                  <div className="my-6 mb-0 relative">
                    <PrismicNextImage
                      field={card.controller_image}
                      className={`w-60 h-40 -mb-10 transform transition-transform duration-300  ${ 
                        index === activeIndex ? '  -translate-y-2 ' : ''
                      }`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div>
              <div className="bg-purple-400 h-2 rounded-full " style={{width:`${progress}%`}}></div>
            </div>
          </Swiper>
        </div>

        {/* Large Screen */}
        <div className="hidden md:flex md:flex-wrap w-full md:justify-center lg:justify-center py-16 gap-6">
          {slice.primary.card.map((card, index) => (
            <div
              key={index}
              className="w-[300px] bg-neutral-700 text-white shadow-lg border border-transparent p-10 flex flex-col justify-center items-center relative group transition-all duration-100 hover:bg-gradient-to-b hover:from-neutral-700 hover:to-purple-700 hover:border hover:border-purple-700"
            >
              <div className="flex mb-4">
                <span
                  className={`text-sm ${card.availability ? 'text-green-400' : 'text-red-400'}`}
                >
                  {card.availability ? 'Available' : 'Unavailable'}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-center">{card.cardheading}</h2>
              <div className="flex mb-10 text-center">
                <div className="flex items-center gap-2 mx-4">
                  <span className="text-2xl font-semibold">{card.number_available_games}</span>
                  <span className="text-sm max-w-[120px] leading-4">Games Available</span>
                </div>
                <span className="h-[40px] w-[2px] bg-white"></span>
                <div className="flex items-center gap-2 mx-4">
                  <span className="text-2xl font-semibold">{card.number_consoles}</span>
                  <span className="text-sm max-w-[120px] leading-4">Consoles Available</span>
                </div>
              </div>
              <PrismicLink field={card.button} className="w-full block">
                <button className="w-full bg-white text-black py-4 rounded-full transition-all duration-100 hover:bg-amber-200">
                  Rent now for {card.button.text}
                </button>
              </PrismicLink>
              <PrismicLink href="tel:123456789" className="w-full block">
                <p className="text-center mt-4 text-gray-300 underline cursor-pointer">
                  or book with a call
                </p>
              </PrismicLink>
              <div className="my-6 mb-0 relative">
                <PrismicNextImage
                  field={card.controller_image}
                  className="w-60 h-40 -mb-10 transform transition-transform duration-300 group-hover:-translate-y-2"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Top;
