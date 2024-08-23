import React, { useState, useEffect } from 'react';
import dontlookImage from '@/assets/random/dontlook.jpeg';
import blueImage from '@/assets/random/blue.jpeg';
import summerImage from '@/assets/random/summer.jpeg';
import { Theme, useLandingTheme } from './LandingThemeContext';
interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = (props) => {
  const { setTheme } = useLandingTheme();

  const backgrounds: { backgroundImage: string, theme: Theme }[] = [
    { backgroundImage: `url(${summerImage})`, theme: { bg: 'bg-[#b2b6a7]', highlight: 'text-platinum' } },
    { backgroundImage: `url(${blueImage})`, theme: { bg: 'bg-[#de8faf]', highlight: 'text-powder' } },
    { backgroundImage: `url(${dontlookImage})`, theme: { bg: 'bg-[#ffefe5]', highlight: 'text-[#ffefe5]' } },
  ];
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
    setTheme(backgrounds[backgroundIdx].theme);
  }, [backgroundIdx, setTheme]);

  useEffect(() => {
    // Preload images
    backgrounds.forEach(background => {
      const img = new Image();
      img.src = background.backgroundImage.replace('url(', '').replace(')', '');
    });
  }, []);

  return (
    <div className={`min-h-screen text-black flex items-center justify-center p-8 font-mono ${backgrounds[backgroundIdx].theme.bg}`}>
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
        }}
      >
        <div className="flex-grow flex flex-col justify-center items-center">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Background;
