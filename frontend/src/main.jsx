import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App.jsx';
import { FavouritesProvider } from './context/FavouritesContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <FavouritesProvider>
            <CartProvider>
          <App />
            </CartProvider>
        </FavouritesProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
