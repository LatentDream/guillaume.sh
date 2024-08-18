// BackgroundContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

interface LandingThemeContextType {
  color: string;
  setTheme: (newColor: string) => void;
}

const LandingThemeContext = createContext<LandingThemeContextType | undefined>(undefined);

export const LandingThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [color, setColor] = React.useState<string>('bg-pink');

  // Update color here as needed, for example with a function
  const setTheme = (newColor: string) => setColor(newColor);

  return (
    <LandingThemeContext.Provider value={{ color, setTheme }}>
      {children}
    </LandingThemeContext.Provider>
  );
};

export const useLandingTheme = () => {
  const context = useContext(LandingThemeContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};
