import React from 'react';
import { Chip } from '@mui/material';

const Genre = ({ genres }) => {
    return (
        <div>
            {genres.map((genre, index) => (
                <Chip key={index} label={genre} style={{ margin: '5px' }} />
            ))}
        </div>
    );
};

export default Genre;
