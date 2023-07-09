
function ListenerSongCard({song}) {
    return (
        <div className="song-contianer">
            <div className="song-card">
                <h3 className="left">{song.title}</h3>
                <h4 className="right"> by {song.artist}</h4>

            </div>
        </div>
    )

}

export default ListenerSongCard

