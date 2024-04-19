import './App.css'
import { ThemeProvider } from './components/providers/themeProvider'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useRouteError } from 'react-router-dom'
import Home from './routes/home/home';
import Cv from './routes/cv/cv';
import React from 'react';


function ErrorBoundary() {
  const error: Error = useRouteError() as Error;
  return (
    // <ErrorPage error={error} resetErrorBoundary={() => location.reload()} />
    <p> Error: {error.message} </p>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/" 
      element={<Cv/>}
      errorElement={<ErrorBoundary />}
    />,
    <Route
      path="/home"
      element={<Home />} 
      errorElement={<ErrorBoundary />}
    />
  ])
);


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
      </ThemeProvider>
    </>
  )
}

export default App
