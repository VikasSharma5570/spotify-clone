import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Button } from '@mui/material';

const Logout = () => {
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out');
            })
            .catch((error) => {
                console.error('Error logging out:', error);
            });
    };

    return <Button onClick={handleLogout}>Log Out</Button>;
};

export default Logout;
