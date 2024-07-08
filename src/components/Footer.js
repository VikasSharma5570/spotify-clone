import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Slider } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@mui/icons-material';

const Footer = ({ play, pause, next, previous }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [trackProgress, setTrackProgress] = React.useState(0);

    const handlePlayPause = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (event, newValue) => {
        setTrackProgress(newValue);
        // Logic to update track progress
    };

    return (
        <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={previous}>
                    <SkipPrevious />
                </IconButton>
                <IconButton edge="start" color="inherit" onClick={handlePlayPause}>
                    {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>
                <IconButton edge="start" color="inherit" onClick={next}>
                    <SkipNext />
                </IconButton>
                <Typography variant="body1" color="inherit">
                    Track Name
                </Typography>
                <Slider
                    value={trackProgress}
                    onChange={handleProgressChange}
                    aria-labelledby="track-progress"
                    color="secondary"
                    style={{ marginLeft: '20px', marginRight: '20px', width: '30%' }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
