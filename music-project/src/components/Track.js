
function Track({name, image, artist}) {
    
    

    return(
        <div>
            <li>
                <img src={image} alt={name}/>
                <h1>{name}</h1>
                <p>{artist}</p>
                <button>Play!</button>
            </li>
        </div>
    )
}

export default Track;