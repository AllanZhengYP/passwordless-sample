import { Amplify, } from 'aws-amplify';
import { Amplify as AmplifyCore } from '@aws-amplify/core';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import amplifyconfiguration from './amplifyconfiguration';

Amplify.configure(amplifyconfiguration);
AmplifyCore.libraryOptions = {
  ...AmplifyCore.libraryOptions,
  Auth: {
    ...AmplifyCore.libraryOptions.Auth,
    magicLinkRedirectURL: 'http://localhost:5173/sign-in-redirect/##code##'
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
