import React , {Suspense} from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import HomeMainHeading  from "./HomeMainHeading";
import { useGSAP } from "@gsap/react";

const HomeSec1 = () => {
  const containerRef = useRef(null);
  const image = useRef(null);

  useGSAP(
    () => {
      gsap.to(image.current, {
        rotationY: 360,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 1,
      });
    },
    { scope: containerRef }
  );

  return (
<Suspense fallback = {<div>Loading ....</div>} >
	<div
      ref={containerRef}
      id="ads_video"
      className="ads_video w-full relative h-[90vh] flex flex-col justify-center pb-14   items-center "
    >
     <HomeMainHeading/>
   

      <img
        ref={image}
        className="absolute  opacity-10 mb-24 w-[500px] "
        src="/images/logo.png"
		loading="lazy"
		width="300"
		height="300"
        alt="boze coin"
      />

      <Link
        to={"https://t.me/BozeCoinBot/bozecoin"}
        target="_blank"
        className="text-center max-md:btn-md max-md:mt-[30px] z-10 btn btn-lg  text-[24px] mt-[40px]  "
      >
        Launch Boze Coin on Telegram
      </Link>
     

      <div className="w-full p-[2vw] z-20 absolute bottom-0 max-sm:bottom-[70px] flex place-content-center place-items-end">
       
        <span className="flex flex-col place-content-center place-items-center gap-[2vw] lg:gap-[0.5vw]">
          <p className="text-[#FFFFFF] text-[clamp(10px,0.8vw,15px)] text-center font-light leading-[125%]">
            SCROLL DOWN
          </p>
          <svg
            viewBox="0 0 28 60"
            fill="none"
            className="h-[clamp(32px,2.5vw,48px)]"
          >
            <g>
              <rect
                x="4.5"
                y="0.5"
                width="19"
                height="53"
                rx="9.5"
                stroke="white"
              />
              <path
                d="M28 45L27.9262 46.033C27.4043 53.3393 21.3248 59 14 59V59C6.67516 59 0.595662 53.3393 0.0737887 46.033L0 45"
                stroke="#dbe60093"
              >
                <animate
                  attributeName="stroke"
                  values="#dbe60093;white;#dbe60093"
                  begin="0s"
                  dur="2s"
                  repeatCount="indefinite"
                  fill="freeze"
                  calcMode="linear"
                  keyTimes="0;0.5;1"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.01;1"
                  begin="0s"
                  dur="2s"
                  repeatCount="indefinite"
                  fill="freeze"
                  calcMode="linear"
                  keyTimes="0;0.5;1"
                />
              </path>
              <rect x="9" y="28" width="10" height="19" rx="5" fill="#dbe60093">
                <animate
                  attributeName="y"
                  values="28;6;28"
                  begin="0s"
                  dur="2s"
                  repeatCount="indefinite"
                  fill="freeze"
                  calcMode="linear"
                  keyTimes="0;0.5;1"
                />
              </rect>
            </g>
          </svg>
        </span>
      </div>
    </div>
	</Suspense>
  );
};

export default HomeSec1;
