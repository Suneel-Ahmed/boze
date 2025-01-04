import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bgImages from '../data/bgImages';
const HomeSec2 = () => {
    const containerRef = useRef(null);

    const leftToRightRef = useRef([]);
    const rightToLeftRef = useRef([]);
   
    useGSAP(
		() => {
              // Slide Left to Right
              gsap.fromTo(
                leftToRightRef.current,
                { x: '-100%' },
                {
                  x: '100%',
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
        
              // Slide Right to Left
              gsap.fromTo(
                rightToLeftRef.current,
                { x: '100%' },
                {
                  x: '-100%',
                  scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                    markers: false,
                  },
                  duration: 5,
                  ease: 'linear',
                }
              );
            },
		{ scope: containerRef }
	);

  return (
    <div ref={containerRef} className='w-full relative min-h-screen py-[70px]  flex justify-center items-center' >
        {/* on scroll slide left to right  */}
        <div className='flex absolute top-56 gap-[100px]' >
            {
                bgImages && bgImages?.map((val, index) =>(

                    <img ref={(el) => (rightToLeftRef.current[index] = el)} key={val?.id}  src={val?.value} className='w-[100px]' alt="logo" />
                ))
            }
        </div>
        <img  src="/images/mobile/mobile.png " className='w-[400px] relative z-10' alt="mobile" />
        {/* on scroll slide right to left  */}
        <div className='flex absolute  bottom-56 gap-[100px]' >
        {
  bgImages && bgImages?.reverse().map((val, index) => (
    <img
      ref={(el) => (leftToRightRef.current[index] = el)}
      key={val?.id}
      src={val?.value}
      className="w-[100px]"
      alt="logo"
    />
  ))
}
        </div>
    </div>
  )
}

export default HomeSec2
