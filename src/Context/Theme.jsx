import React, { createContext, useContext, useEffect, useState } from 'react';

const TeamContext = createContext();

function ThemProvider({ children }) {
    const [isDark, setDark] = useState(() => {
        // Check if theme preference is already saved in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          return savedTheme === 'dark';
        }
    
        // Otherwise, check the system theme preference (optional)
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark;
      });

      useEffect(() => {
        // Apply the dark class to the body element
        if (isDark) {
          document.body.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.body.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }, [isDark]);

      const toggleTheme = () => {
        setDark(!isDark);
      }
    return (
        <TeamContext.Provider value={{ isDark, setDark, toggleTheme }}>
            {children}
        </TeamContext.Provider>
    );
}

const useChangeTheme = () => {
    const { isDark, setDark, toggleTheme } = useContext(TeamContext);
    return { isDark, setDark, toggleTheme };
};

export { ThemProvider, useChangeTheme };