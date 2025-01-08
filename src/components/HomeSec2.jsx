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
    const tl =   gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top center',
					end: `bottom bottom`,
					scrub: 1.5,
				},
			});
              // Slide Left to Right
              tl.fromTo(
                leftToRightRef.current,
                { x: `-${containerWidth - 200}px` },
                {
                  x: `100%`,
                  duration: 5,
                  ease: 'power1.inOut',
                }
              );
        
              // Slide Right to Left
              tl.fromTo(
                rightToLeftRef.current,
                { x: '100%' },
                {
                  x: `-${containerWidth - 200}px`,
                  duration: 5,
                  ease: 'power1.inOut',
                } ,"<"
              );
            },
		{ scope: containerRef }
	);

  return (
    <div ref={containerRef} className='w-full overflow-x-hidden relative max-md:min-h-fit min-h-screen max-md:py-[10px] py-[40px]  flex justify-center items-center' >
        {/* on scroll slide left to right  */}
        <div className='flex absolute max-md:top-28 top-48 gap-[100px]' >
            {
                bgImages && bgImages?.map((val, index) =>(

                    <img ref={(el) => (rightToLeftRef.current[index] = el)} key={val?.id}  src={val?.value} className='w-[clamp(40px,4.3vw,100px)]' alt="logo" />
                ))
            }
        </div>
        <img  src="/images/mobile/6.png " className='w-[clamp(250px,50.4vw,750px)] relative z-10' alt="mobile" />
        {/* on scroll slide right to left  */}
        <div className='flex absolute max-md:bottom-28  bottom-56 gap-[100px]' >
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
