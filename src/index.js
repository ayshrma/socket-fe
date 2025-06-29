import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Auth0Provider
    // domain="dev-xb7a36wvmujjnbbo.us.auth0.com"
      domain="dev-xb7a36wvmujjnbbo.us.auth0.com"
      clientId="jmiBZ8vpnpc3xejODTG901THiZXv59r2"
    // clientId="DLoM3xumQchcSYTskcjwVEzQA3bYM4tK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
