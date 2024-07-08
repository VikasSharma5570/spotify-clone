import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { TextField, Button } from '@mui/material';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User signed up:', userCredential.user);
            })
            .catch((error) => {
                console.error('Error signing up:', error);
            });
    };

    return (
        <div>
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleSignUp}>Sign Up</Button>
        </div>
    );
};

export default SignUp;
