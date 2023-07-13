import { React, useState, useContext } from "react"
import ListenerContext from "./ListenerContext"

//patch songs state instead of using ratings
function RatingCard({rating, song, songs, setSongs}) {
    const star = "⭐"
    let stars = ""
    
    const listener = useContext(ListenerContext)
    const ratingListener = rating.listener_name

    for(let i=0; i< rating.review ; i++){
        stars += star
    }
    const [editError, setEditError] = useState(false)
    const [commentChange, setCommentChange] = useState("")

    function handleDelete(e) {
        e.preventDefault()
        if (listener != null) {
            if (listener.id == rating.listener_id) {
                fetch(`/songs/${song.id}/ratings/${rating.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(null), 
                })
                .then(resp => console.log(resp))
                .then(() => {
                    const newRatings = song.ratings.filter(item => item.id != rating.id)
                    song.ratings = newRatings
                    const newSongs = songs.map(songItem => songItem.id == rating.song_id? song : songItem)
                    setSongs(newSongs)
                    listener.songs = listener.songs.filter(song => song.id != rating.song_id)
                })
            }
            else {
                setEditError(true)
                setTimeout(() => {
                    setEditError(false);
                }, "1500");
            }
        }
        else {
            setEditError(true)
            setTimeout(() => {
                setEditError(false);
            }, "1500");
        }
    }

    function updateComment(e) {
        e.preventDefault()
        setCommentChange(e.target.value)
    }

    function updateRating(e) {
        e.preventDefault();
        e.target.children[0].value = ''
        if (listener != null) {
            if (listener.id == rating.listener_id) {
                fetch(`/songs/${song.id}/ratings/${rating.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({comment: commentChange}), 
                }).then(resp => resp.json())
                .then((newRating) => {
                    console.log(newRating)
                    const newRatings = song.ratings.map(rating => rating.id == newRating.id? newRating : rating) 
                    //setRatings(newRatings)
                })
            }
            else {
                setEditError(true)
                setTimeout(() => {
                    setEditError(false);
                }, "1500");
            }
        }
        else {
            setEditError(true)
            setTimeout(() => {
                setEditError(false);
            }, "1500");
        }
    }
    
    return(
        <div id="rating">
            <h3>{ratingListener} :</h3>
            <h5>{stars}</h5>
            <h5>{rating.comment}</h5>
            <form id='update_rating' onSubmit={updateRating}>
                <input name="comment" type="text" onChange={updateComment}></input>
                <input type="submit" value="Change Comment"></input>
            </form>
            <button id="delete" onClick={handleDelete}>X</button>
            <h5 style={{color: "red"}}>{editError ? "Listeners can only edit their own ratings" :null}</h5>
        </div>
    )
}

export default RatingCard;