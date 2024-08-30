import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    return (
        <h1>Hello from react</h1>
    )
}

function SecondPage() {
    return (
        <h1>Second Page</h1>
    )
}

const Router = ({ children, location }) => {
    if (typeof window !== 'undefined') {
        return <BrowserRouter>{children}</BrowserRouter>;
    }
    return <StaticRouter location={location}>{children}</StaticRouter>;
};

export default function ReactApp({ location }) {
    return (
        <Router location={location}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/second/" element={<SecondPage />} />
            </Routes>
        </Router>
    );
}
