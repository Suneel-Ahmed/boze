import { useEffect, useState } from 'react';

function useAssetsLoader(images = []) {
  const [areImagesLoaded, setImagesLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    if (images?.length) {
      const imagePromises = images?.map((imageSrc) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = imageSrc;

          img.onload = () => resolve(img);
          img.onerror = () => reject(`Failed to load image: ${imageSrc}`);

          // Using img.decode() with proper promise handling
          img.decode()
            .then(() => resolve(img))  // Resolve when decode is successful
            .catch(() => reject(`Failed to decode image: ${imageSrc}`));  // Reject on decode failure
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          setImagesLoaded(true);
        })
        .catch((error) => {
          console.error(error);
          setLoadingError(true); // Set error state if any image fails to load or decode
        });
    } else {
      setImagesLoaded(true);
    }
  }, [images]);

  return { areImagesLoaded, loadingError };
}

export default useAssetsLoader;
