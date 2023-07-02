import {React, useState, useEffect} from 'react';

function SongCard({song}) {

    console.log(song.ratings)
    //need rating card
    //need to make sure ratings is showing in song json returned
    
    return(
        <div>
            <p>{song.title}</p>
            <p>by {song.artist}</p>
        </div>
    )

}

export default SongCard;