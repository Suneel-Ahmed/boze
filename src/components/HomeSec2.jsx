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
      const containerWidth = containerRef.current.offsetWidth;
               // Slide Left to Right
              gsap.fromTo(
                leftToRightRef.current,
                { x: `-${containerWidth - 200}px` },
                {
                  x: `100%`,
                  duration: 20,
                  ease: 'none',
                  repeat: -1,
                }
              );
        
              // Slide Right to Left
              gsap.fromTo(
                rightToLeftRef.current,
                { x: '100%' },
                {
                  x: `-${containerWidth - 200}px`,
                  duration: 20,
                  ease: 'none',
                  repeat: -1,
                } ,"<"
              );
            },
		{ scope: containerRef }
	);

  return (
    <div ref={containerRef} className='w-full overflow-x-hidden relative max-md:min-h-fit min-h-screen max-md:py-[10px] py-[40px]  flex justify-center items-center' >
        {/* on scroll slide left to right  */}
        <div className='flex absolute max-md:top-28 max-sm:top-10 top-48 gap-[100px]' >
            {
                bgImages && bgImages?.map((val, index) =>(

                    <img loading="lazy" width="500" height="300" ref={(el) => (rightToLeftRef.current[index] = el)} key={val?.id}  src={val?.value} className='w-[clamp(40px,4.3vw,100px)]' alt="logo" />
                ))
            }
        </div>
        <img  loading="lazy" width="500" height="300" src="/images/mobile/6.png " className='w-[clamp(250px,50.4vw,750px)] relative z-10' alt="mobile" />
        {/* on scroll slide right to left  */}
        <div className='flex absolute max-md:bottom-28 max-sm:bottom-10   bottom-56 gap-[100px]' >
        {
  bgImages && bgImages?.reverse().map((val, index) => (
    <img
    loading="lazy" width="500" height="300"
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
