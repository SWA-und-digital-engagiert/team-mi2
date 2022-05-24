import './App.css';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

export default withAuthenticator(App);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
          <button onClick={signOut}>Sign out</button>
          <h2>Hello my Users</h2>
      </header>
    </div>
  );
}
