import './App.css'
import { ThemeProvider } from './components/providers/themeProvider'
import { BrowserRouter, Route, Routes, useRouteError } from 'react-router-dom'
import Cv from './routes/cv/cv';
import React from 'react';
import Landing from './routes/landing/Landing';
import Watson from './routes/watson/Watson';


function ErrorBoundary() {
  const error: Error = useRouteError() as Error;
  return (
    // <ErrorPage error={error} resetErrorBoundary={() => location.reload()} />
    <p> Error: {error.message} </p>
  );
}

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Landing />}
                errorElement={<ErrorBoundary />}
              />
              <Route
                path="/cv"
                element={<Cv />}
                errorElement={<ErrorBoundary />}
              />,
              <Route
                path="/watson"
                element={<Watson />}
                errorElement={<ErrorBoundary />}
              />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </ThemeProvider>
    </>
  )
}

export default App
