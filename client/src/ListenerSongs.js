import {React, useState, useEffect, useContext} from 'react';
import ListenerContext from './ListenerContext';
import SongCard from './SongCard';

function ListenerSongs({songs}) {

    const listener = useContext(ListenerContext)

    const songItems = listener ? listener.songs.map(song => {
        <SongCard key={song.title} song={song}></SongCard>
    }) : "not logged on"

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