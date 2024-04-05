// src/App.jsx
import React from "react";
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import ExchangeRate from "./components/ExchangeRate.jsx";
import { ThemeProvider } from "./components/theme/ThemeContext";
import ThemeHandler from "./components/theme/ThemeHandler.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      method: "GET", // Default HTTP method for queries
      refetchOnWindowFocus: false, // Disable automatic refetching on window focus
      refetchInterval: 60000, // Refetch queries every 60 seconds
    },
  },
});

function App() {
  return (
    <ThemeProvider> {/* Envuelve tu aplicación con ThemeProvider */}
      <ThemeHandler /> {/* Maneja el cambio de tema */}
        <QueryClientProvider client={queryClient}>
          <ExchangeRate />
        </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;