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
    <div className="min-h-screen bg-black text-green-500 flex flex-col justify-between p-8 font-mono">
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="bg-black border border-green-500 p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">
            {text}
            <span className="animate-blink">_</span>
          </h1>
          
          <nav className="space-y-4">
            {options.map((option, index) => (
              <div 
                key={option.name}
                className="text-xl cursor-pointer hover:text-green-300 transition-colors duration-300"
                onClick={() => navigate(option.path)}
                onMouseEnter={() => setSelectedOption(index)}
              >
                <span className={selectedOption === index ? 'text-green-300' : ''}>
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
        onClick={() => navigate('/esp')}
      >
        [ESP]
      </div>
    </div>
  );
};

export default LandingPage;
