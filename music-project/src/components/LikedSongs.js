import Track from "./Track";

function LikedSongs({likedSongs, handleLikeClick}) {
    const displayTracks = likedSongs.map((track) => {
        return <Track key={track.id} track={track} handleLikeClick={handleLikeClick}/>
    })
        return(
        <div>
            {displayTracks}
        </div>
    )
}

export default LikedSongs;