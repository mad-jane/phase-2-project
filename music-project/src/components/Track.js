
function Track({ track, handleLikeClick }) {
    return(
        <div>
            <li id="track-card">
                <img src={track.album.images[1].url} alt={track.name}/>
                <h1>{track.name}</h1>
                <h3>{track.artists[0].name}</h3>
                {track.preview_url ? <audio src={track.preview_url} controls /> : null}
                <button id="like-button" onClick={() => handleLikeClick(track)}>🖤</button>
            </li>
            <hr className='track-line'/>
        </div>
    )
}

export default Track;