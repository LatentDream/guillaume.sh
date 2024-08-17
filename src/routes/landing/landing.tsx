import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "  Choose an option to begin ";
  const navigate = useNavigate();
  const options = [
    { name: 'Watson.ai', path: '/watson-ai' },
    { name: 'CV', path: '/cv' },
  ];

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
          navigate(options[selectedOption].path);
          break;
        case 'Escape':
          // Reset selection when Esc is pressed
          setSelectedOption(-1);
          break;
        case '?':
          navigate('/cv');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedOption, navigate, options]);

  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col justify-between p-8 font-mono">
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="bg-black border border-green-500 p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-left whitespace-nowrap">
            {text}
            {showCursor && <span className="animate-blink">█</span>}
          </h1>

          <nav className="space-y-4">
            {options.map((option, index) => (
              <div
                key={option.name}
                className={`text-xl cursor-pointer transition-colors duration-300 ${selectedOption === index ? 'text-green-300' : 'hover:text-green-300'
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
        className="fixed bottom-4 left-4 text-sm cursor-pointer hover:text-green-300 transition-colors duration-300"
        onClick={() => navigate('/cv')}
      >
        [Press: <span className="underline">?</span>] to know more about the author
      </div>
    </div>
  );
};

export default LandingPage;
