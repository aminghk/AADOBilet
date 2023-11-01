import React, { useState } from 'react';
import SliderCard from './SliderCard'
import rihanna from '../../assets/rihanna.jpg'
import kurt from '../../assets/kurt.jpg'
import tupac from '../../assets/tupac.jpg'
import shakira from '../../assets/shakira.jpg'
import sago from '../../assets/sago.jpg'
import drake from '../../assets/drake.jpg'
import billie from '../../assets/billie.jpg'
import inna from '../../assets/inna.jpg'
import bg from '../../assets/bg.png'

const SliderComp = () => {
  const arr = [rihanna, kurt, tupac, shakira, sago, drake, billie, inna];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? arr.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleSlides = window.innerWidth <= 768 ? 3 : 5; // Aynı anda görüntülenen slayt sayısı
  const firstVisibleIndex = (currentIndex + arr.length) % arr.length;
  const visibleArr = [...arr.slice(firstVisibleIndex), ...arr.slice(0, firstVisibleIndex)].slice(0, visibleSlides);

  return (
    <div className='relative h-full w-full mt-8'>
      <img className='absolute top-0 left-0 h-full w-full' src={bg} alt="" />

      <div className='w-full flex justify-center items-center gap-2'>
        {(
          <>
            <div className='z-10 cursor-pointer text-5xl p-2 font-bold' onClick={prevSlide}>&lt;</div>
            {visibleArr.map((img, i) => (
              <SliderCard img={img} key={i} />
            ))}
            <div className='z-10 cursor-pointer text-5xl p-2 font-bold' onClick={nextSlide}>&gt;</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SliderComp;
