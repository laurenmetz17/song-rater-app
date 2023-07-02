

function ratingCard({rating}) {
    console.log(rating.review)
    console.log("⭐")
    
    return(
        <div id="rating">
            <h5>{rating.review}</h5>
            <h5>{rating.comment}</h5>

        </div>
    )
}

export default ratingCard;