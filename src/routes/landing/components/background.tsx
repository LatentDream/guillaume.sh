import React, { useState, useEffect } from 'react';
import dontlookImage from '@/assets/random/dontlook.jpeg';
// import universeImage from '@/assets/random/universe.jpeg';
// import lainpatternImage from '@/assets/random/lainpattern.gif';
// import itslifeImage from '@/assets/random/itslife.png';

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = (props) => {

  const backgrounds = [
    { backgroundImage: `url(${dontlookImage})`, color: 'bg-pink' },
    // { backgroundImage: `url(${universeImage})`, color: 'bg-primary' },
    // { backgroundImage: `url(${lainpatternImage})`, color: 'bg-secondary' },
    // { backgroundImage: `url(${itslifeImage})`, color: 'bg-tangerine' },
  ]
  const [backgroundIdx, setBackgroundIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'h':
          setBackgroundIdx((prev) => (prev > 0 ? prev - 1 : backgrounds.length - 1));
          break;
        case 'ArrowRight':
        case 'l':
          setBackgroundIdx((prev) => (prev < backgrounds.length - 1 ? prev + 1 : 0));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Preload images
    backgrounds.forEach(background => {
      const img = new Image();
      img.src = background.backgroundImage.replace('url(', '').replace(')', '');
    });
  }, []);

  return (
    <div className={`min-h-screen text-black flex items-center justify-center p-8 font-mono ${backgrounds[backgroundIdx].color}`}>
      <div
        className="min-h-[85vh] flex flex-col justify-between p-8 font-mono"
        style={{
          backgroundImage: backgrounds[backgroundIdx].backgroundImage,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '85vh',
          width: '85vw',
          transition: 'background-image 0.5s ease-in-out, background-color 0.5s ease-in-out',
        }}     >
        <div className="flex-grow flex flex-col justify-center items-center">
          { props.children }
        </div>
      </div>
    </div>
  );
};

export default Background;
