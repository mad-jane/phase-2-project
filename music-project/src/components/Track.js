
function Track({ track, handleLikeClick }) {
    return(
        <div>
            <li>
                <img src={track.album.images[1].url} alt={track.name}/>
                <h1>{track.name}</h1>
                <h2>{track.artists[0].name}</h2>
                <audio src={track.preview_url} controls />
                <button onClick={() => handleLikeClick(track)}>Like</button>
            </li>
        </div>
    )
}

export default Track;