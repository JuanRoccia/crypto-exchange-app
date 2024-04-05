// src/components/theme/ThemeHandler.js
import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeHandler = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return null;
};

export default ThemeHandler;