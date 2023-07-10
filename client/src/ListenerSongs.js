import {React, useContext} from 'react';
import ListenerContext from './ListenerContext';
import ListenerSongCard from './ListenerSongCard';

function ListenerSongs() {
    const listener = useContext(ListenerContext)
    let songItems

    if (listener != null) {
        songItems = listener.songs.map(song => (
            <ListenerSongCard key={song.title} song={song}/>
        ))
    }

    return(
        <div>
            <h1>Listener Songs</h1>
            {listener ? songItems : "not logged on"}        
        </div>
    )

}

export default ListenerSongs;