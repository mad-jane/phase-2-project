
function Track({name, image, artist, preview}) {

    return(
        <div>
            <li>
                <img src={image} alt={name}/>
                <h1>{name}</h1>
                <h2>{artist}</h2>
                <audio src={preview} controls />
            </li>
        </div>
    )
}

export default Track;