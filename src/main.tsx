import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import { store } from './app/store.ts'
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
    
  </StrictMode>
);
