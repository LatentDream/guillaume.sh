import ControlToolTip from './components/controlToolTip';
import Background from './components/Background';
import { LandingThemeProvider } from './components/LandingThemeContext';
import Navigator from './components/Navigator';

const LandingPage: React.FC = () => {

  const options = [
    { name: 'Watson AI - an app to record & summarize meetings', path: 'https://github.com/LatentDream/watson.ai', isReferal: true },
    { name: 'Ploomber.io - Where I work', path: 'https://www.ploomber.io', isReferal: true },
    { name: 'Art Commun - Something cool I\'m working on', path: 'https://artcommun.com', isReferal: true },
  ];

  return (
    <LandingThemeProvider>
      <Background>

        <Navigator options={options} title="  Where to begin ?" /> 
        <ControlToolTip />

      </Background>
    </LandingThemeProvider>
  );
};

export default LandingPage;
