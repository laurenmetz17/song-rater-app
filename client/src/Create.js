import {React, useState} from 'react';

function Create({songs, setSongs}) {

    const [songError,setSongError] = useState(false)
    const [songForm, setSongForm] = useState({
        title: "",
        artist: "",
    })

    function updateSong(e) {
        setSongError(false)
        const target = e.target.name
        setSongForm({...songForm, [target] : e.target.value})
    }

    function setArt(e) {
        fetch(`https://itunes.apple.com/search?media=music&entity=song&term=${songForm.title}`)
        .then(resp => {
            if (resp.ok) {
                console.log(resp)
                resp.json()
                .then(data => {
        
                    const songsMatch = data.results.filter(songItem => songItem.artistName == songForm.artist);
                    const songData = songsMatch[0]
                    if (songData) {
                        fetch('', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(songForm),
                            })
                            .then(resp => {
                                if (resp.ok) {
                                    resp.json()
                                    .then((newSong) => {
                                        setSongs([...songs, newSong]);
                                    })
                                }
                                else {
                                    setSongError(true)
                                    console.log(resp)
                                }
                            });
                    }
                    else {
                        setSongError(true)
    
                    } 
                    e.target.children[1].value = ""
                    e.target.children[3].value = ""   
                })
            }
        })
    }


    function createSong(e) {
        e.preventDefault();
        console.log(songForm)
        setArt(e)
        setSongForm({"title": "", "artist": ""})

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
            {songError ? <p style={{color: "red"}}>Invalid Song Info</p> : null} 
        </div>
    )

}

export default Create;