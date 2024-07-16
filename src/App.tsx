import './App.css'
import { ThemeProvider } from './components/providers/themeProvider'
import { BrowserRouter, Route, Routes, useRouteError } from 'react-router-dom'
import Cv from './routes/cv/cv';
import React from 'react';


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
                element={<Cv />}
                errorElement={<ErrorBoundary />}
              />,
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </ThemeProvider>
    </>
  )
}

export default App
