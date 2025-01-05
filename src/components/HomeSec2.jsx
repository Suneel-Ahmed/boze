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
    <div ref={containerRef} className='w-full overflow-x-hidden relative max-md:min-h-fit min-h-fit max-md:py-[10px] py-[40px]  flex justify-center items-center' >
        {/* on scroll slide left to right  */}
        <div className='flex absolute max-md:top-28 top-32 gap-[100px]' >
            {
                bgImages && bgImages?.map((val, index) =>(

                    <img ref={(el) => (rightToLeftRef.current[index] = el)} key={val?.id}  src={val?.value} className='w-[clamp(40px,4.3vw,100px)]' alt="logo" />
                ))
            }
        </div>
        <img  src="/images/mobile/mobile.png " className='w-[clamp(250px,19.4vw,650px)] relative z-10' alt="mobile" />
        {/* on scroll slide right to left  */}
        <div className='flex absolute max-md:bottom-28  bottom-32 gap-[100px]' >
        {
  bgImages && bgImages?.reverse().map((val, index) => (
    <img
      ref={(el) => (leftToRightRef.current[index] = el)}
      key={val?.id}
      src={val?.value}
      className="w-[clamp(40px,4.3vw,100px)]"
      alt="logo"
    />
  ))
}
        </div>
    </div>
  )
}

export default HomeSec2
