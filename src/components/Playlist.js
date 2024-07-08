import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder, PlayArrow } from '@mui/icons-material';
import { useFavorites } from '../contexts/FavoritesContext';
import { useRecentlyPlayed } from '../contexts/RecentlyPlayedContext';

const Playlist = ({ playlists }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const { addRecentlyPlayed } = useRecentlyPlayed();

    const isFavorite = (track) => {
        return favorites.some(favorite => favorite.id === track.id);
    };

    const handlePlay = (track) => {
        // Logic to play the track
        addRecentlyPlayed(track);
    };

    return (
        <List>
            {playlists.map((track, index) => (
                <ListItem button key={index}>
                    <ListItemText primary={track.name} />
                    <IconButton edge="end" aria-label="play" onClick={() => handlePlay(track)}>
                        <PlayArrow />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="favorite"
                        onClick={() => isFavorite(track) ? removeFavorite(track.id) : addFavorite(track)}
                    >
                        {isFavorite(track) ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default Playlist;
