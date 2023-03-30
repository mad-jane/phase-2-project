import logo from '../assets/logo.png'

function Artist({ artist }) {

    return(
        <div>
            <li id="artist-card">
                {artist.images[1] ? <img src={artist.images[1]?.url} alt={artist.name} placeholder={logo}/> : <img src={logo} alt={artist.name} placeholder={logo}/>}
                <h1>{artist.name}</h1>
            </li>
            <hr className='artist-line'/>
        </div>
    )
}

export default Artist;