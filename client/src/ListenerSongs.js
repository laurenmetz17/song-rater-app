import {React, useState, useEffect, useContext} from 'react';
import ListenerContext from './ListenerContext';
import ListenerSongCard from './ListenerSongCard';

function ListenerSongs() {

    const listener = useContext(ListenerContext)
    console.log(listener)
    let songItems
    if (listener != null) {
        songItems = listener.songs.map(song => (
            <ListenerSongCard key={song.title} song={song}/>
        ))
    }

    console.log(songItems)

    //not showing listener songs once logged in but showing not logged on

    
    //do by filtering songs to those with listener id so you get nothing if no listener

    return(
        <div>
            <h1>Listener Songs</h1>
            {listener ? songItems : "not logged on"}        
        </div>
    )

}

export default ListenerSongs;