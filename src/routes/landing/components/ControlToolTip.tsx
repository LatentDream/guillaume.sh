import { useNavigate } from 'react-router-dom';

const ControlToolTip: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="fixed bottom-9 left-4 text-sm"
      >
        [<span className="underline">↑/↓ or j/k</span>] To move around
      </div>
      <div
        className="fixed bottom-4 left-4 text-sm"
      >
        [<span className="underline">←/→ or h/l</span>] To change vibe
      </div>

      <div
        className="fixed bottom-14 right-5 text-sm cursor-pointer hover:text-muted-foreground transition-colors duration-300"
        onClick={() => window.open('https://twitter.com/latentdream', '_blank')}
      >
        Twitter [<span className="underline">t</span>]
      </div>
      <div
        className="fixed bottom-9 right-5 text-sm cursor-pointer hover:text-muted-foreground transition-colors duration-300"
        onClick={() => window.open('https://github.com/latentdream', '_blank')}
      >
        GitHub [<span className="underline">g</span>]
      </div>
      <div
        className="fixed bottom-4 right-5 text-sm cursor-pointer hover:text-muted-foreground transition-colors duration-300"
        onClick={() => navigate('/cv')}
      >
        About me [<span className="underline">?</span>]
      </div>
    </>
  );
};

export default ControlToolTip;
