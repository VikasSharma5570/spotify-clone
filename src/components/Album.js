import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Album = ({ albums }) => {
    return (
        <Grid container spacing={3}>
            {albums.map((album, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{album.name}</Typography>
                            <Typography color="textSecondary">{album.artist}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Album;
