import { Button } from '@/components/ui/button';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import watsonProductImage from '@/assets/watson/watsonDemo.png';
import watsonIconImage from '@/assets/watson/icon.png';

const Watson: React.FC = () => {

    return (
        <div className="min-h-screen flex flex-col p-8 overflow-hidden">
            <header className="flex justify-between items-center mb-12">
                <div className="flex items-center space-x-2">
                    <img className='w-12' src={watsonIconImage} alt="Watson Icon" />
                    <h1 className="text-3xl font-bold">Watson.ai</h1>
                </div>
                <nav className="space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
                    <Button variant="outline" className="ml-4" onClick={() => window.open('https://github.com/latentdream/watson.ai', '_blank')}><FaGithub className="mr-2" />Star it on Github</Button>
                    <Button>Download</Button>
                </nav>
            </header>

            <div className="text-center mb-12 relative z-10">
                <div className="inline-block px-3 py-1 rounded-full text-sm mb-4">
                    New: Watson is now open source! <a href="#" className="underline flex items-center inline-flex">Star it on GitHub <FaGithub className="ml-1" /></a>
                </div>
                <h2 className="text-5xl font-bold mb-4">Watson <span className="text-tangerine">AI note taker. </span></h2>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Watson is a meeting assistant that transcribes and summarizes meetings by recording your system audio and microphone to extracts all action items and with a meeting summaries!</p>
                <div className="space-x-4">
                    <Button size="lg">Download</Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.open('https://cal.com/guillaume-thibault/30min', '_blank')}
                    >Request a Demo</Button>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[62%]">
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
