import {React, useState, useEffect} from 'react';

function SongCard({song}) {
    
    return(
        <div>
            <p>{song.title}</p>
            <p>by {song.artist}</p>
            <p>{song.duration}</p>
        </div>
    )

}

export default SongCard;