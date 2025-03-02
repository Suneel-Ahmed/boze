import { useEffect, useState } from 'react';

function useAssetsLoader(images = []) {
  const [areImagesLoaded, setImagesLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let isMounted = true; // Prevent state updates after unmount
    let loadedCount = 0; // Track loaded images count

    const imagePromises = images.map((imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
          if (!isMounted) return;
          loadedCount++;
          resolve(img);

          // Update state when all images are loaded
          if (loadedCount === images.length) {
            setImagesLoaded(true);
          }
        };

        img.onerror = () => {
          console.error(`Failed to load image: ${imageSrc}`);
          setLoadingError(true);
          reject(`Failed to load image: ${imageSrc}`);
        };
      });
    });

    Promise.all(imagePromises).catch(() => {
      if (isMounted) setLoadingError(true);
    });

    // Fallback: If images take too long, force loading completion after 5s
    const timeout = setTimeout(() => {
      if (isMounted && !areImagesLoaded) {
        console.warn("Images took too long to load. Proceeding...");
        setImagesLoaded(true);
      }
    }, 5000);

    return () => {
      isMounted = false; // Cleanup on unmount
      clearTimeout(timeout);
    };
  }, [images]);

  return { areImagesLoaded, loadingError };
}

export default useAssetsLoader;
