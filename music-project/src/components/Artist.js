function Artist({ artist }) {
    return(
        <div>
            <li>
                <img src={artist.images[1]?.url} alt={artist.name} placeholder="No Image"/>
                <h1>{artist.name}</h1>
            </li>
        </div>
    )
}

export default Artist;