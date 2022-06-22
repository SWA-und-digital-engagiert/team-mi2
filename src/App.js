import {Amplify} from 'aws-amplify';
import './App.css';

import {Authenticator} from '@aws-amplify/ui-react';
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

/*class DarkMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {darkmode: false};
    }

    darkMode() {
        let element = document.root;
        element.classList.toggle("dark-mode");
    }

    render () {
        return (
            <div>
                <button onClick={() => this.setState({darkmode: !this.state.darkmode})}>Darkmode</button>
            </div>
        )
    }
}*/

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.ticker = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticker)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default function App() {
    return (
        <div id="all">
            <div id="top-bar">
                <div id="div-logo-top">
                    <div className="header_inhalte">
                        <a className="logo_hot" title="Zur Startseite"
                           href="https://www.hands-on-technology.org/de/"><img id="logo-top" src={logo} alt="HoT-logo"/></a>
                    </div>
                </div>

                <div id="center-div">
                    <Header/>
                </div>
                <div id="center-div">
                    <h1>Willkommen bei HANDS on TECHNOLOGY</h1>
                </div>
            </div>
            <div id="authenticator">
                <Authenticator
                    formFields={formFields}
                    signUpAttributes={['email', 'phone_number', 'nickname', 'birthdate', 'name']}
                >
                    {({signOut, user}) => (
                        <main>
                            <div id="center-div">
                                <button class="glow-on-hover" type="button" onClick={signOut}>Sign out</button>
                                <h1>Hello {user.attributes.nickname}</h1>
                            </div>
                        </main>
                        )}
                </Authenticator>
            </div>
            <div id="center-div">
                HANDS on TECHNOLOGY e.V.
            </div>
        </div>
    );
}
