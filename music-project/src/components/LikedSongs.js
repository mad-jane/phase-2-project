import Track from "./Track";

function LikedSongs({likedSongs, handleLikeClick, track}) {
    const displayTracks = likedSongs.map((track) => {
        return <Track 
            track={track}
            key={track.id}
            handleLikeClick={handleLikeClick}/>
    })
        return(
        <div className='liked-songs-container'>
            <h1 className='liked-songs-title'>Liked Songs</h1>
            {displayTracks}
        </div>
    )
}

export default LikedSongs;