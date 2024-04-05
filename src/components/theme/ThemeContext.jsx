// src/components/theme/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Valor predeterminado
  
    const toggleTheme = () => {
      setTheme((prevTheme) => {
        const newTheme = prevTheme === 'light' ? 'dark' : 'light';
        console.log("Cambiando tema a:", newTheme); // Agregar para depuración
        return newTheme;
      });
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

// Añade esta línea al final de ThemeContext.jsx
export { ThemeContext };