import ControlToolTip from './components/ControlToolTip';
import Background from './components/Background';
import { LandingThemeProvider } from './components/LandingThemeContext';
import Navigator from './components/Navigator';

const LandingPage: React.FC = () => {

  const options = [
    { name: 'Watson AI - App I made to record & summarize meetings', path: '/watson', isReferal: false },
    { name: 'Ploomber.io - Current work, tools to streamline Data Science', path: 'https://www.ploomber.io', isReferal: true },
    { name: 'Blog & Ressources - Work in progress', path: 'https://latentdream.dev', isReferal: true },
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
