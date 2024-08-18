// BackgroundContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

export type Theme = { bg: string, highlight: string };

interface LandingThemeContextType {
  theme: Theme;
  setTheme: (newColor: Theme) => void;
}

const LandingThemeContext = createContext<LandingThemeContextType | undefined>(undefined);

export const LandingThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>({ bg: '#ffefe5', highlight: "tangerine" });

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
