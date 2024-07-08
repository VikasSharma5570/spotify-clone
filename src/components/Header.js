import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Logout from './Logout';

const Header = ({ setSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [user] = useAuthState(auth);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            axios.get(`/api/search?query=${searchTerm}`)
                .then(response => {
                    setSearchResults(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the search results!", error);
                });
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Spotify Clone
                </Typography>
                <div>
                    <div>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                </div>
                {user ? (
                    <Logout />
                ) : (
                    <div>
                        <Button component={Link} to="/login">Log In</Button>
                        <Button component={Link} to="/signup">Sign Up</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
