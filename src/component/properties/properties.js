"use client";
import { useState, useRef, useEffect } from 'react';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { Popular } from "../../db";
import Image from "next/image";
import Location from "../../../public/images/location.svg";	

export default function Properties() {
  
      useEffect(() => {
        const updateMaxIndex = () => {
          if (scrollRef.current) {
            const container = scrollRef.current;
            const cardWidth = container.children[0]?.offsetWidth || 0;
            const gap = 16; // gap-4 = 16px
            const containerWidth = container.offsetWidth;
            
            // Calculate how many cards are visible
            let visibleCards = 4; // desktop default
            if (window.innerWidth < 768) {
              visibleCards = 1; // mobile
            } else if (window.innerWidth < 1024) {
              visibleCards = 2; // tablet
            }
            
            const totalScrollableCards = Popular.length - visibleCards;
            setMaxIndex(Math.max(0, totalScrollableCards));
          }
        };
    
        updateMaxIndex();
        window.addEventListener('resize', updateMaxIndex);
        return () => window.removeEventListener('resize', updateMaxIndex);
      }, [Popular.length]);
    
      const scroll = (direction) => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const cardWidth = container.children[0]?.offsetWidth || 0;
          const gap = 16;
          const scrollAmount = cardWidth + gap;
          
          if (direction === 'left' && currentIndex > 0) {
            container.scrollLeft -= scrollAmount;
            setCurrentIndex(prev => prev - 1);
          } else if (direction === 'right' && currentIndex < maxIndex) {
            container.scrollLeft += scrollAmount;
            setCurrentIndex(prev => prev + 1);
          }
        }
      };
    
      const handleScroll = () => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const cardWidth = container.children[0]?.offsetWidth || 0;
          const gap = 16;
          const scrollLeft = container.scrollLeft;
          const newIndex = Math.round(scrollLeft / (cardWidth + gap));
          setCurrentIndex(newIndex);
        }
      };
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);

  return (
    <div className="px-4 md:px-8 lg:px-16 space-y-8 flex flex-col items-center justify-center mt-16 mb-10 relative">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-10">
        Discover Our Popular Properties
      </h1>
           <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className={`hidden absolute left-8  bottom-1/4 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 lg:flex items-center justify-center transition-all duration-200 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-xl hover:scale-105'
            }`}
          >
            <GoArrowLeft />
          </button>
  
          <button
            onClick={() => scroll('right')}
            disabled={currentIndex >= maxIndex}
            className={`hidden absolute right-8 bottom-1/4 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full bg-[#3D9970] shadow-sm border border-[#3D9970] lg:flex items-center justify-center transition-all duration-200 ${
              currentIndex >= maxIndex 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-xl hover:scale-105'
            }`}
          >
             <GoArrowRight />
          </button>
      <div 
       ref={scrollRef}
            onScroll={handleScroll}
          style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }}
            }
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl">
        {Popular.map((props) => (
          <div
            className="relative rounded-md overflow-hidden shadow-lg border"
            key={props.id}
          >
            <div className="relative w-full h-70 md:h-72 lg:h-90">
              <Image
                src={props.image}
                alt={props.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {props.title}
              </h2>
              <p className="text-white text-sm mt-1">{props.description}</p>
              <div className="flex items-center gap-2  text-sm">
                <span className="text-white border-r border-white pr-2">
                  {props.beds}
                </span>
                <span className="text-white border-r border-white pr-2">
                  {props.bath}
                </span>
                <span className="text-white">{props.square}</span>
              </div>
              <div className="mt-2">
                <span className="text-white font-semibold">{props.price}</span>
              </div>
              <div className='flex items-center gap-2  text-sm mt-1 text-white'>
                <Image src={Location} alt='location' width={10} height={10}/>
                <p>Victoria Island, Lagos</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
