import React, { createContext, useContext, useState } from 'react';

const RecentlyPlayedContext = createContext();

export const useRecentlyPlayed = () => useContext(RecentlyPlayedContext);

export const RecentlyPlayedProvider = ({ children }) => {
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    const addRecentlyPlayed = (track) => {
        setRecentlyPlayed([track, ...recentlyPlayed]);
    };

    return (
        <RecentlyPlayedContext.Provider value={{ recentlyPlayed, addRecentlyPlayed }}>
            {children}
        </RecentlyPlayedContext.Provider>
    );
};
