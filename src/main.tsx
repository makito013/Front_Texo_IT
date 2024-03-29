import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MoviesProvider } from "./contexts/moviesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>
);

declare module "@mui/material/styles" {
  interface Theme {
    border: {
      main: string;
    };
    tertiary: string;
  }
  interface ThemeOptions {
    border?: {
      main?: string;
    };
    tertiary: string;
  }
}
