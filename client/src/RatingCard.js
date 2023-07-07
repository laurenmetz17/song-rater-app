import { React, useState } from "react"


function RatingCard({rating, song, setRatings}) {
    const star = "⭐"

    const [commentChange, setCommentChange] = useState("")

    function handleDelete(e) {
        e.preventDefault()
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
            setRatings(newRatings)
        })
    }

    function updateComment(e) {
        e.preventDefault()
        setCommentChange(e.target.value)
    }

    function updateRating(e) {
        e.preventDefault();
        e.target.children[0].value = ''

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
            setRatings(newRatings)
        })
    }
    
    return(
        <div id="rating">
            <h5>{rating.review}</h5>
            <h5>{rating.comment}</h5>
            <p>Change Comment :</p>
            <form id='update_rating' onSubmit={updateRating}>
                <input name="comment" type="text" onChange={updateComment}></input>
                <input type="submit" value="Change Comment"></input>
            </form>
            <button id="delete" onClick={handleDelete}>X</button>
        </div>
    )
}

export default RatingCard;