import {React, useState, useEffect, useContext} from 'react';
import ListenerContext from './ListenerContext';
import RatingCard from './RatingCard';

function SongCard({song}) {
    
    const listener = useContext(ListenerContext)
    console.log(listener)

    const [showForm, setShowForm] = useState(false)
    const [showRatings, setShowRatings] = useState(false)
    const [ratingForm, setRatingForm] = useState({
        review: 1,
        comment: "",
        song_id: song.id,
        listener_id: null
    })
    //update rating form 
    
    function updateRating(e) {
        const target = e.target.name
        setRatingForm({...ratingForm, [target] : e.target.value, "listener_id": listener.id})
    }
    

    function submitRating(e) {
        e.preventDefault()
        console.log(ratingForm)
        setShowForm(false)

        //fetch to post review from listener
    }

    const ratings = song.ratings.map(rating => (
        <RatingCard key={rating.id} rating={rating}></RatingCard>
    ))
    

    console.log(song.ratings)
    
    return(
        <div>
            <p>{song.title}</p>
            <p>by {song.artist}</p>
            {showRatings ? (
                <div>
                    <button onClick={() => setShowRatings(false)}>Hide Ratings</button>
                    {ratings}
                </div>
                ): <button onClick={() => setShowRatings(true)}>Show Ratings</button>
            }
            {showForm? (
                <form id="make_rating" onSubmit={submitRating}>
                <select name="review" type="number" onChange={updateRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>Comment:</label>
                <input name="comment" type="text" onChange={updateRating}/>
                <input name="submit" type="submit"/>
            </form>
            ): <button onClick={() => {listener? setShowForm(true): setShowForm(false)}}>{listener ? "Rate Me!" : "Log In to Rate Me!"}</button>}
        </div>
    )

}

export default SongCard;