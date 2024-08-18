// BackgroundContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

interface LandingThemeContextType {
  theme: string;
  setTheme: (newColor: string) => void;
}

const LandingThemeContext = createContext<LandingThemeContextType | undefined>(undefined);

export const LandingThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<string>('bg-pink');

  return (
    <LandingThemeContext.Provider value={{ theme, setTheme }}>
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
