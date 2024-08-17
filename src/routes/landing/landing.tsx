import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState(0);
  const fullText = "Choose an option to begin...";
  const navigate = useNavigate();
  const options = [
    { name: 'Watson.ai', path: '/watson-ai' },
    { name: 'CV', path: '/cv' },
  ];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedOption, navigate, options]);

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-16 text-center">
        {text}
        <span className="animate-blink">|</span>
      </h1>
      
      <nav className="space-y-4 text-center">
        {options.map((option, index) => (
          <div 
            key={option.name}
            className="text-2xl text-secondary hover:text-popover transition-colors duration-300 relative group cursor-pointer"
            onClick={() => navigate(option.path)}
            onMouseEnter={() => setSelectedOption(index)}
          >
            <span className={selectedOption === index ? 'text-popover' : ''}>
              {selectedOption === index && '→ '}
              {option.name}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default LandingPage;
