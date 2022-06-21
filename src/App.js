import { Amplify } from 'aws-amplify';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React from "react";
import logo from "./logo_hands_on_technology.svg";

Amplify.configure(awsExports);

const formFields = {
    signIn: {
        username: {
            labelHidden: false,
            placeholder: 'Enter Your Email Here',
            isRequired: true,
            label: 'Email:'
        },
    },
    signUp: {
        name: {
            labelHidden: false,
            placeholder: 'Your Name',
            isRequired: true,
            label: 'Name:'
        },
        password: {
            labelHidden: false,
            placeholder: 'Choose a safe Password',
            isRequired: true,
            label: 'Password:'
        },
        nickname: {
            labelHidden: false,
            placeholder: 'How your Friends call you',
            isRequired: false,
            label: 'Nickname (Displayed in Chat etc.):'
        },
        email: {
            labelHidden: false,
            placeholder: 'Email',
            isRequired: true,
            label: 'Email:'
        },
        phone_number: {
            labelHidden: false,
            placeholder: 'Phone Number (+49) (0) 123 123 45 678',
            isRequired: true,
            label: 'Phone Number:',
            dialCodeList: ['+49']
        },
        birthdate: {
            labelHidden: false,
            placeholder: 'tt.mm.jjjj',
            isRequired: true,
            label: 'Birthdate:',
        },
        enter_code: {
            labelHidden: false,
            placeholder: 'The Entercode to enter this organisation',
            isRequired: true,
            label: 'Entercode:',
        }
    },
}

export default function App() {
    return (
        <div id="div-logo-top">
            <div className="header_inhalte">
                <a className="logo_hot" title="Zur Startseite"
                   href="https://www.hands-on-technology.org/de/"><img id="logo-top" src={logo} alt="HoT-logo"/></a>
            </div>
            <Authenticator
            formFields={formFields}
            signUpAttributes={['email', 'phone_number', 'nickname', 'birthdate', 'name']}
            >
                {({ signOut, user }) => (
                    <main>
                        <button onClick={signOut}>Sign out</button>
                        <div>


                        </div>
                        <h1>Hello {user.attributes.nickname}</h1>
                    </main>
                )}
            </Authenticator>
        </div>
    );
}
