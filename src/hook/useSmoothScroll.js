import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroll = () => {
  useEffect(() => {
    // Set up ScrollTrigger

    ScrollTrigger.defaults({
      markers: false, // Set to true for debugging
      start: "top top",
      end: "bottom bottom",
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger?.killAll();
    };
  }, []);
};

export default useSmoothScroll;
