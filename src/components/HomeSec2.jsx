import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bgImages from '../data/bgImages';
import Marquee from "react-fast-marquee";
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
        <div className='flex absolute max-md:top-28 max-sm:top-10 top-48 max-md:gap-[20px] gap-[100px]' >
          <Marquee speed={50}  delay={0} >

          {
                bgImages && bgImages?.map((val , key)=>(
                  <div key={key} className="mx-6 max-sm:mx-3 image_wrapper">
                  <img src={val?.value}  width={500} height={500} alt='brand logos' 
                  className={`brandsLogo w-[clamp(40px,8.3vw,200px)]  aspect-video object-contain  `} />
                </div>
                ))
              }
            </Marquee>
        </div>
        <img  loading="lazy" width="500" height="300" src="/images/mobile/6.png " className='w-[clamp(250px,50.4vw,750px)]  relative z-10' alt="mobile" />
        {/* on scroll slide right to left  */}
        <div className='flex absolute max-md:bottom-28 max-sm:bottom-10  max-sm:gap-[10px]  bottom-56 gap-[100px]' >
        <Marquee speed={50} direction='right' delay={0} >

        {
                bgImages && bgImages?.map((val , key)=>(
                  <div key={key} className="mx-6 max-sm:mx-3 image_wrapper">
                  <img src={val?.value}  width={500} height={500} alt='brand logos' 
                  className={`brandsLogo w-[clamp(40px,8.3vw,200px)]  aspect-video object-contain  `} />
                </div>
                ))
              }
            </Marquee>
        </div>
    </div>
  )
}

export default HomeSec2
