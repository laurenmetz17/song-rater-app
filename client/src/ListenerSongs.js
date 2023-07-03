import {React, useState, useEffect, useContext} from 'react';
import ListenerContext from './ListenerContext';

function ListenerSongs() {

    const listener = useContext(ListenerContext)
    console.log(listener)

    return(
        <div>
            <h1>Listener Songs</h1>
        </div>
    )

}

export default ListenerSongs;