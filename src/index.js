import React from 'react';
import ReactDOM from 'react-dom/client';
//import Auth0Provider from '@auth0/auth0-react'
//import './index.css';
import './css/bt.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/*Auth0Provider 
    domain="dev-hu8u7z2yhlv3evdl.us.auth0.com" 
    clientId="4aZwraqjKMV8TUF1RCU2NEjjwr9fASxn" 
redirectUrl={window.location.origin} />*/}
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
