import {React, useState, useEffect} from 'react';

function SongCard({song}) {

    const [showForm, setShowForm] = useState(false)

    const rateForm = () => {
        return(
            <div>
                <form id="make_rating">
                    <select name="review" type="number" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Comment:</label>
                    <input name="comment" type="text"></input>
                    <input name="submit" type="submit">Create Review</input>
                </form>
            </div>
        );
    }
    //on submit create review with listener and song id and setShowForm state to false

    console.log(song.ratings)
    //need rating card
    
    return(
        <div>
            <p>{song.title}</p>
            <p>by {song.artist}</p>
            <button onClick={()=> setShowForm(true)}>Rate Me!</button>
        </div>
    )

}

export default SongCard;