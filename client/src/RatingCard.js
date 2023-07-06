

function RatingCard({rating, song, setRatings}) {
    console.log(rating.review)
    console.log("⭐")

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
            //setratings
        })
    }
    
    return(
        <div id="rating">
            <h5>{rating.review}</h5>
            <h5>{rating.comment}</h5>
            <button id="delete" onClick={handleDelete}>X</button>

        </div>
    )
}

export default RatingCard;