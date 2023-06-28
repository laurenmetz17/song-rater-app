import {React, useState, useEffect} from 'react';
import SongCard from './SongCard';

function Songs({songs}) {

    const songItems = songs.map(song => {
        return <SongCard key={song.title} song={song} />
    })

    
    return(
        <div>
            <h1>{songItems}</h1>
        </div>
    )

}

export default Songs;