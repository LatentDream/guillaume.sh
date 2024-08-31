import React from 'react';
import { BrowserRouter, useRouteError } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cv from './routes/cv/cv';


function ErrorBoundary() {
  const error: Error = useRouteError() as Error;
  return (
    // <ErrorPage error={error} resetErrorBoundary={() => location.reload()} />
    <p> Error: {error.message} </p>
  );
}

function SecondPage() {
    return (
        <h1>hello</h1>
    );
}

const Router = ({ children, location }) => {
    if (typeof window !== 'undefined') {
        return <BrowserRouter>{children}</BrowserRouter>;
    }
    return <StaticRouter location={location}>{children}</StaticRouter>;
};

export default function App({ location }) {
    return (
        <Router location={location}>
            <Routes>
                <Route
                    path="/"
                    element={<Cv />}
                    errorElement={<ErrorBoundary />}
                />
                <Route path="/second/" element={<SecondPage />} />
            </Routes>
        </Router>
    );
}
