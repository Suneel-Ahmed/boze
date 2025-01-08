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
                    start: 'top bottom', 
                    end: 'bottom top',   
                    scrub: 1,            
                    markers: false,      
                  },
                  duration: 6,
                  ease: 'linear',
                }
              );
        
         
            },
		{ scope: containerRef }
	);
  return (
    <div ref={containerRef} className='w-full min-h-fit  overflow-x-hidden py-[15vh]' >
      <h1 ref={leftToRightRef} className='text-[clamp(60px,6.2vw,250px)] text-nowrap text-white/30 italic quicksand uppercase font-semibold' >Earn while <span className='text-[#fdb71f]/60'> watching </span> and  <span className='text-[#fdb71f]/60'> learning </span> </h1>
    </div>
  )
}

export default HeadingSec
