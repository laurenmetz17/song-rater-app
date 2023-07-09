import {React, useState, useEffect} from 'react';
import SongCard from './SongCard';

function Songs({songs}) {

    const songItems = songs.map(song => {
        return <SongCard key={song.title} song={song} />
    })

    
    return(
        <div className="song-container">
            {songItems}
        </div>
    )

}

export default Songs;