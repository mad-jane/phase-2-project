import Track from "./Track";

function LikedSongs({likedSongs, handleLikeClick, track}) {
    const displayTracks = likedSongs.map((track) => {
        return <Track 
            track={track}
            key={track.id}
            handleLikeClick={handleLikeClick}/>
    })
        return(
        <div>
            {displayTracks}
        </div>
    )
}

export default LikedSongs;