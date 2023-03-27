
function Songs({name, image, artist, renderTopTracks}) {
    
    return(
        <div>
            <li>
                <img src={image} alt={name}/>
                <h1>{name}</h1>
                <p>{artist}</p>
            </li>
        </div>
    )
}

export default Songs;