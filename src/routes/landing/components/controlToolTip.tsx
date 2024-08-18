import { useNavigate } from 'react-router-dom';

const ControlToolTip: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="fixed bottom-14 left-4 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
        onClick={() => window.open('https://twitter.com/latentdream', '_blank')}
      >
        [<span className="underline">t</span>] To follow me on Twitter
      </div>
      <div
        className="fixed bottom-9 left-4 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
      >
        [<span className="underline">↑/↓ or j/k</span>] To move around
      </div>
      <div
        className="fixed bottom-4 left-4 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
      >
        [<span className="underline">←/→ or h/l </span>]To change the vibe of the place (Comming soon!)
      </div>

      <div
        className="fixed bottom-9 right-5 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
        onClick={() => window.open('https://github.com/latentdream', '_blank')}
      >
        GitHub [<span className="underline">g</span>]
      </div>
      <div
        className="fixed bottom-4 right-5 text-sm cursor-pointer hover:text-tangerine transition-colors duration-300"
        onClick={() => navigate('/cv')}
      >
        Who made this [<span className="underline">?</span>]
      </div>
    </>
  );
};

export default ControlToolTip;
