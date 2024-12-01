import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-1nghwl5hc1fbj7vd.us.auth0.com"
    clientId="OO7sdPWlkG8xlZj2KOaID1g91Nd3vgaA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  
  </StrictMode>,
)
