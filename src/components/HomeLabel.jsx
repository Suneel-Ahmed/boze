import React , {useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const HomeLabel = () => {
  const containerRef = useRef(null);
  const leftToRightRef = useRef([]);
  
  useGSAP(
    () => {
      const containerWidth = leftToRightRef.current.offsetWidth;
      const textWidth = leftToRightRef.current.offsetWidth;
      // Slide Left to Right
      gsap.fromTo(
        leftToRightRef.current,
        { x: containerWidth },
        {
          x: `-${textWidth * 2.2}px`,
          duration:40,
          ease: "linear",
          repeat : -1,
        }
      );
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef} className="rotate-3 w-full max-lg:mt-[120px] bg-[#fdb71f] overflow-hidden min-h-fit py-2 my-5">
      <h1 ref={leftToRightRef} className="text-white text-[20px] font-normal p-2 text-nowrap capitalize ">
        Boze Coin: Empowering the Digital Economy! Transforming engagement into
        rewards, we create a sustainable and inclusive ecosystem where users
        thrive. With simplicity at its core, Boze Coin offers opportunities to
        earn through tasks, social media, blogs, and Telegram interactions—no
        content creation needed. Join a community that values fairness,
        innovation, and growth. Claim your rewards effortlessly and become part
        of a platform that shares revenue directly with you. Together, we
        redefine the way you interact with the digital world. Boze Coin is your
        gateway to a brighter, more rewarding online future. Engage, earn, and
        evolve with Boze Coin today!
      </h1>
    </div>
  );
};

export default HomeLabel;
