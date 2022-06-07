import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from 'aws-amplify/ui-react'

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AmplifySignOut />
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          north virginia
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

