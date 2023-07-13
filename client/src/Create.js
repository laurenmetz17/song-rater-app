import {React, useState} from 'react';

function Create({songs, setSongs}) {

    const [songForm, setSongForm] = useState({
        title: "",
        artist: ""
    })

    function updateSong(e) {
        const target = e.target.name
        setSongForm({...songForm, [target] : e.target.value})
    }

    function createSong(e) {
        e.preventDefault();       
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(songForm),
            })
            .then(resp => resp.json())
            .then((newSong) => {
                setSongs([...songs, newSong]);
            });

            e.target.children[1].value = ""
            e.target.children[3].value = ""

    }

    return(
        <div>
            <h1>Add song</h1>
            <form id="create_songs" onSubmit={createSong}>
                <h5>Title:</h5>
                <input type="text" name="title" onChange={updateSong}></input>
                <h5>Artist:</h5>
                <input type="text" name="artist" onChange={updateSong}></input>
                <input type="submit" value="Create Song"></input> 
            </form>
        </div>
    )

}

export default Create;