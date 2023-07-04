import {React, useState, useEffect} from 'react';
import RatingCard from './RatingCard';

function SongCard({song}) {
    console.log(song)

    console.log(song.ratings)

    const [showForm, setShowForm] = useState(false)
    const [showRatings, setShowRatings] = useState(false)

    function submitRating(e) {
        e.preventDefault()
        setShowForm(false)
        //fetch to post review from listener
        //why refresh
    }

    const ratings = song.ratings.map(rating => (
        <RatingCard key={rating.id} rating={rating}></RatingCard>
    ))
    

    console.log(song.ratings)
    //need rating card
    
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
                <select name="review" type="number" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>Comment:</label>
                <input name="comment" type="text"/>
                <input name="submit" type="submit"/>
            </form>
            ): <button onClick={()=> setShowForm(true)}>Rate Me!</button>}
        </div>
    )

}

export default SongCard;