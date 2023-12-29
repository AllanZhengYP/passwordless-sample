import { Amplify, } from 'aws-amplify';
import { Amplify as AmplifyCore } from '@aws-amplify/core';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import SignUp from './SignUp.tsx';
import SignIn from './SignIn.tsx';
import amplifyconfiguration from './amplifyconfiguration';
import MagicLinkRedirect from './MagicLinkRedirect.tsx';

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
    <RouterProvider router={
      createBrowserRouter([
          {
            path: '/',
            element: <App/>,
          },
          {
            path: 'sign-up',
            element: <SignUp/>
          },
          {
            path: 'sign-in',
            element: <SignIn/>
          },
          {
            path: 'sign-in-redirect',
            children: [
              {
                path: ':code',
                element: <MagicLinkRedirect/>
              }
            ]
          }
        ])
    }></RouterProvider>
  </React.StrictMode>,
)
