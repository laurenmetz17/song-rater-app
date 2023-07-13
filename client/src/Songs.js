import {React} from 'react';
import SongCard from './SongCard';

function Songs({songs, setSongs}) {

    const songItems = songs.map(song => {
        return <SongCard key={song.title} song={song} songs={songs} setSongs={setSongs} />
    })

    
    return(
        <div className="song-container">
            {songItems}
        </div>
    )

}

export default Songs;