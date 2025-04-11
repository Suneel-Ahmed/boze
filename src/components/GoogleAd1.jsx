import React, { useEffect, useRef } from 'react';

const GoogleAd1 = () => {
  const adRef = useRef(null);
  const adInitialized = useRef(false);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    const initializeAd = () => {
      // Check if ad element exists and hasn't been initialized yet
      if (adRef.current && !adInitialized.current) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adInitialized.current = true;
        } catch (e) {
          console.error("Google Ad error:", e);
        }
      }
    };

    const loadAdScript = () => {
      if (!window.adsbygoogle) {
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3092170199670503";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.onload = initializeAd;
        document.head.appendChild(script);
      } else {
        initializeAd();
      }
    };

    // Small delay to allow DOM to settle
    const timer = setTimeout(loadAdScript, 100);

    return () => {
      clearTimeout(timer);
      // Clean up ad element on unmount if needed
      if (adRef.current) {
        adRef.current.innerHTML = '';
        adRef.current.removeAttribute('data-adsbygoogle-status');
      }
    };
  }, []);

  return (
    <div className="ad-container ">
    <ins ref={adRef} class="adsbygoogle"
     style={{display:"block" , textAlign:"center"}}
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-3092170199670503"
     data-ad-slot="8398836941"></ins>


    </div>
  );
};

export default GoogleAd1;