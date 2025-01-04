import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const HeadingSec = () => {
    const containerRef = useRef(null);

    const leftToRightRef = useRef([]);
   
    useGSAP(
		() => {
              // Slide Left to Right
              gsap.fromTo(
                leftToRightRef.current,
                { x: '100%' },
                {
                  x: '-100%',
                  scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom', // Start when the top of the container reaches the bottom of the viewport
                    end: 'bottom top',   // End when the bottom of the container reaches the top of the viewport
                    scrub: 1,            // Smoothly scrubs the animation with the scroll position
                    markers: false,      // Set to true to visualize the scrollTrigger markers
                  },
                  duration: 5,
                  ease: 'linear',
                }
              );
        
         
            },
		{ scope: containerRef }
	);
  return (
    <div ref={containerRef} className='w-full h-fit overflow-x-hidden py-10' >
      <h1 ref={leftToRightRef} className='text-[200px] text-nowrap text-white/30 italic quicksand font-semibold' >YOU CAN <span className='text-[#fdb71f]/60'> TRADE </span> ANY TOKEN</h1>
    </div>
  )
}

export default HeadingSec
