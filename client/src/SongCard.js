import {React, useState, useEffect, useContext} from 'react';
import ListenerContext from './ListenerContext';
import RatingCard from './RatingCard';

function SongCard({song}) {
    
    const listener = useContext(ListenerContext)
    const [showForm, setShowForm] = useState(false)
    const [ratings, setRatings] = useState(song.ratings)
    const [showRatings, setShowRatings] = useState(false)
    const ratingAverage = (ratings.reduce((sum, rating) => sum = sum + rating.review, 0))/ratings.length
    const ratingIds = ratings.map(rating => rating.id)
    const [ratingError, setRatingError] = useState(false)
    const [ratingForm, setRatingForm] = useState({
        review: 1,
        comment: "",
        song_id: song.id,
        listener_id: null
    })
    
    function updateRating(e) {
        const target = e.target.name
        setRatingForm({...ratingForm, [target] : e.target.value, "listener_id": listener.id})
    }
    

    function submitRating(e) {
        e.preventDefault()
        console.log(ratingForm)
        setShowForm(false)
        if (ratingIds.includes(listener.id)) {
            fetch(`/songs/${song.id}/ratings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ratingForm),
            })
            .then(resp => resp.json())
            .then((newRating) => {
                console.log(newRating);
                const newRatings = [...ratings, newRating]
                setRatings(newRatings)

                //some sort of state update here for songs and listener to show  listener song
            });
            //not allow the same listener to review the same song twice
        }
        else {
            setRatingError(true)
            setTimeout(() => {
                setRatingError(false);
            }, "1500");
        }
    }

    const ratingItems = ratings.map(rating => (
        <RatingCard key={rating.id} rating={rating} song={song} ratings={ratings} setRatings={setRatings} listener={listener}></RatingCard>
    ))
    

    console.log(song.ratings)
    
    return(
        <div>
            <p>{song.title}</p>
            <p>by {song.artist}</p>
            <p>Average Listener Rating: {ratingAverage > 0 ? ratingAverage: 0}</p>
            <h5 style={{color:"red"}}>{ratingError ? "You've already rated this song": null}</h5>
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
            {showRatings ? (
                <div>
                    <button onClick={() => setShowRatings(false)}>Hide Ratings</button>
                    {ratingItems}
                </div>
                ): <button onClick={() => setShowRatings(true)}>Show Ratings</button>
            }
        </div>
    )

}

export default SongCard;