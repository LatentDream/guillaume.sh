import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import watsonProductImage from '@/assets/watson/watsonDemo.png';
import watsonIconImage from '@/assets/watson/icon.png';
import DownloadButton, { Distro } from './components/DownloadWatson';
import backgroundImage from '@/assets/watson/background.jpeg';

const Watson: React.FC = () => {
    const [stars, setStars] = useState<number | null>(null);
    const [distro, setDistro] = useState<Distro>('windows');

    // Detect platform
    useEffect(() => {
        // Fetch GitHub stars
        fetch('https://api.github.com/repos/latentdream/watson.ai')
            .then(response => response.json())
            .then(data => setStars(data.stargazers_count))
            .catch(error => console.error('Error fetching GitHub stars:', error));

        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.includes('mac')) {
            setDistro('mac');
        } else {
            setDistro('windows');
        }

    }, []);

    return (
        <div className="min-h-screen flex flex-col p-4 md:p-8 overflow-hidden" style = {{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <header className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <img className='w-12' src={watsonIconImage} alt="Watson Icon" />
                    <h1 className="text-3xl font-bold">Watson.ai</h1>
                </div>
                <nav className="space-y-2 md:space-y-0 md:space-x-4">
                    <Button variant="outline" className="w-full md:w-auto mt-2 md:mt-0" onClick={() => window.open('https://github.com/latentdream/watson.ai', '_blank')}>
                        <FaGithub className="mr-2" />
                        Star on Github {stars !== null && `(${stars})`}
                    </Button>
                    <DownloadButton className="w-full md:w-auto mt-2 md:mt-0" distro={distro} />
                </nav>
            </header>
            <div className="text-center mb-12 relative z-10">
                <div className="inline-block px-3 py-1 rounded-full text-sm mb-4">
                    New: Watson is now open source! <a href="#" className="underline flex items-center inline-flex">Star it on GitHub</a>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-tangerine">Watson </span> AI note taker</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Watson is a meeting assistant that transcribes and summarizes meetings by recording your system audio and microphone to extracts all action items and with a meeting summaries!</p>
                <div className="flex items-center justify-center">
                    <div className="space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                        <DownloadButton
                            className="w-full md:w-auto"
                            size="lg"
                            distro={distro}
                        />
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full md:w-auto mt-2 md:mt-0"
                            onClick={() => window.open('https://cal.com/guillaume-thibault/30min', '_blank')}
                        >
                            Request a Demo
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-[62%]">
                <div className="relative">
                    <div className="absolute inset-0 bg-tangerine rounded-t-lg filter blur-3xl opacity-50"></div>
                    <img
                        src={watsonProductImage}
                        alt="Watson Product Demo"
                        className="relative z-10 w-full h-auto rounded-t-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Watson;
