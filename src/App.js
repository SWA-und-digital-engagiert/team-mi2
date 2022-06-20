import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
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
        <Authenticator
        formFields={formFields}
        signUpAttributes={['email', 'phone_number', 'nickname', 'birthdate', 'name']}
        >
            {({ signOut, user }) => (
                <main>
                    <h1>Willkommen {user.username}</h1>
                    <p id="whitespace"></p>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );
}