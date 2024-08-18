import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLandingTheme } from './LandingThemeContext';

type NavigatorProps = {
  title: string;
  options: { name: string; path: string; isReferal: boolean }[];
};

const Navigator: React.FC<NavigatorProps> = ({ title, options }) => {
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [displayOptions, setDisplayOptions] = useState(false);
  const { theme } = useLandingTheme();

  const navigate = useNavigate();

  const typeText = useCallback(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (index >= title.length) {
          clearInterval(intervalId);
          setDisplayOptions(true);
          return prevText;
        }
        return prevText + title[index];
      });
      index++;
    }, 100);

    return () => clearInterval(intervalId);
  }, [title]);

  useEffect(() => {
    const cursorIntervalId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorIntervalId);
  }, []);

  useEffect(() => {
    return typeText();
  }, [typeText]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
        case 'k':
          setSelectedOption((prev) => (prev > 0 ? prev - 1 : options.length - 1));
          break;

        case 'ArrowDown':
        case 'j':
          setSelectedOption((prev) => (prev < options.length - 1 ? prev + 1 : 0));
          break;

        case 'Enter':
          if (options[selectedOption].isReferal) {
            window.open(options[selectedOption].path, '_blank');
            return;
          }
          navigate(options[selectedOption].path);
          break;

        case 'Escape':
          // Reset selection when Esc is pressed
          setSelectedOption(-1);
          break;

        case '?':
          navigate('/cv');
          break;

        case 't':
          window.open('https://twitter.com/latentdream', '_blank');
          break;

        case 'g':
          window.open('https://github.com/latentdream', '_blank');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedOption, navigate, options]);

  return (
    <div className={`
      border border-primary p-8 rounded-lg shadow-lg max-w-2xl w-full
      backdrop-blur-md bg-opacity-70
      ${theme}
      before:content-[''] before:absolute before:inset-0 before:rounded-lg
      before:bg-gradient-to-br before:from-white/10 before:to-transparent
      before:pointer-events-none before:z-10
      relative overflow-hidden
    `}>
      <h1 className="text-xl md:text-xl font-bold mb-8 text-left whitespace-nowrap">
        {text}
        {showCursor && <span className="animate-blink">█</span>}
      </h1>

      <div className={`grow-transition ${displayOptions ? 'show' : ''}`}>
        {displayOptions && (
          <nav className="space-y-4">
            {options.map((option, index) => (
              <div
                key={option.name}
                className={`text-md cursor-pointer transition-colors duration-300 ${selectedOption === index ? 'text-tangerine' : 'hover:text-tangerine'
                  }`}
                onClick={() => navigate(option.path)}
                onMouseEnter={() => setSelectedOption(index)}
              >
                <span>
                  {selectedOption === index ? '> ' : '  '}
                  {option.name}
                </span>
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navigator;
