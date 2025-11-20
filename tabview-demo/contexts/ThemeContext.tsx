import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeType = 'classic' | 'neon';

interface ThemeColors {
  background: string;
  cardBackground: string;
  headerBackground: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentSecondary: string;
  border: string;
  tabActive: string;
  tabInactive: string;
  shadow: string;
  cardBorder: string;
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: ThemeColors;
}

const classicTheme: ThemeColors = {
  background: '#f5f5f5',
  cardBackground: '#ffffff',
  headerBackground: '#2563eb',
  text: '#1f2937',
  textSecondary: '#6b7280',
  accent: '#2563eb',
  accentSecondary: '#3b82f6',
  border: '#e5e7eb',
  tabActive: '#2563eb',
  tabInactive: '#9ca3af',
  shadow: '#000000',
  cardBorder: '#e5e7eb',
};

const neonTheme: ThemeColors = {
  background: '#0a0a0a',
  cardBackground: '#1a1a1a',
  headerBackground: '#1a1a1a',
  text: '#00FF41',
  textSecondary: '#0FF',
  accent: '#00FF41',
  accentSecondary: '#FF00FF',
  border: '#00FF41',
  tabActive: '#00FF41',
  tabInactive: '#666',
  shadow: '#00FF41',
  cardBorder: '#FF00FF',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('classic');

  const toggleTheme = () => {
    setTheme(prev => prev === 'classic' ? 'neon' : 'classic');
  };

  const colors = theme === 'classic' ? classicTheme : neonTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
