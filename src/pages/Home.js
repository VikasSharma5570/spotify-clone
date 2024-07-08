import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Playlist from '../components/Playlist';
import Album from '../components/Album';
import Genre from '../components/Genre';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import { RecentlyPlayedProvider } from '../contexts/RecentlyPlayedContext';

const Home = () => {
    const [playlists, setPlaylists] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get('/api/playlists')  // Replace with your API endpoint
            .then(response => {
                setPlaylists(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the playlists!", error);
            });

        axios.get('/api/albums')  // Replace with your API endpoint
            .then(response => {
                setAlbums(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the albums!", error);
            });

        axios.get('/api/genres')  // Replace with your API endpoint
            .then(response => {
                setGenres(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the genres!", error);
            });
    }, []);

    const play = () => {
        // Logic to play the current track
    };

    const pause = () => {
        // Logic to pause the current track
    };

    const next = () => {
        // Logic to play the next track
    };

    const previous = () => {
        // Logic to play the previous track
    };

    return (
        <FavoritesProvider>
            <RecentlyPlayedProvider>
                <div>
                    <Header setSearchResults={setSearchResults} />
                    {searchResults.length > 0 ? (
                        <Playlist playlists={searchResults} />
                    ) : (
                        <>
                            <Playlist playlists={playlists} />
                            <Album albums={albums} />
                            <Genre genres={genres} />
                        </>
                    )}
                    <Footer play={play} pause={pause} next={next} previous={previous} />
                </div>
            </RecentlyPlayedProvider>
        </FavoritesProvider>
    );
};

export default Home;
