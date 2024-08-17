import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '@/assets/random/dontlook.jpeg';

const LandingPage: React.FC = () => {
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "  Where to begin ?";
  const navigate = useNavigate();
  const options = [
    { name: 'Watson AI: an app to record & summarize meetings', path: 'https://github.com/LatentDream/watson.ai', isReferal: true },
    { name: 'Something cool: Art Commun', path: 'https://artcommun.com', isReferal: true },
    { name: 'Where I work: Ploomber.io', path: 'https://www.ploomber.io', isReferal: true },
    { name: 'My Curriculum Vitae', path: '/cv' },
  ];

  const specialBackground = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '70%',
    width: '70%',
  };

  const typeText = useCallback(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (index >= fullText.length) {
          clearInterval(intervalId);
          return prevText;
        }
        return prevText + fullText[index];
      });
      index++;
    }, 100);

    return () => clearInterval(intervalId);
  }, [fullText]);

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
    <div className="bg-pink min-h-screen text-black flex items-center justify-center p-8 font-mono">
      <div className="min-h-[70vh] flex flex-col justify-between p-8 font-mono" style={specialBackground}>
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="border bg-pink border-primary p-8 rounded-lg shadow-lg max-w-2xl w-full">
            <h1 className="text-2xl md:text-4xl font-bold mb-8 text-left whitespace-nowrap">
              {text}
              {showCursor && <span className="animate-blink">█</span>}
            </h1>

            <nav className="space-y-4">
              {options.map((option, index) => (
                <div
                  key={option.name}
                  className={`text-xl cursor-pointer transition-colors duration-300 ${selectedOption === index ? 'text-tangerine' : 'hover:text-tangerine'
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
          </div>
        </div>

        <div
          className="fixed bottom-4 right-5 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
          onClick={() => window.open('https://twitter.com/latentdream', '_blank')}
        >
          [<span className="underline">j/k or ↑/↓</span>] To move around
        </div>
        <div
          className="fixed bottom-14 left-4 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
          onClick={() => window.open('https://twitter.com/latentdream', '_blank')}
        >
          [<span className="underline">t</span>] To follow me on Twitter
        </div>
        <div
          className="fixed bottom-9 left-4 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
          onClick={() => window.open('https://github.com/latentdream', '_blank')}
        >
          [<span className="underline">g</span>] To follow me on GitHub
        </div>
        <div
          className="fixed bottom-4 left-4 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
          onClick={() => navigate('/cv')}
        >
          [<span className="underline">?</span>] To know more about the author
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
