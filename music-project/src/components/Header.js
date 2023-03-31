import Track from "./Track"
import Artist from "./Artist"

const Header = ({logo, searchResults, setSearchKey, artists, tracks, handleLikeClick}) => {
    const displayTracks = tracks.map((track) => {
        return <Track track={track} handleLikeClick={handleLikeClick}/>
    })
    const displayArtists = artists.map((artist) => {
        return <Artist artist={artist}/>
    })
    return (
        <div>
            <div className="app-header">
                <img className="logo" src={logo} alt='audio-house-logo'></img>
            </div>
            <div className="search-section">
                <h1 className="search-title">Search Music</h1>
                <form onSubmit={(e) => searchResults(e)}>
                    <input className='search-box' type="text" placeholder="Search Songs and Artists" onChange={e => setSearchKey(e.target.value)}/>
                    <button className='search-button' type={"submit"}>Search</button>
                </form>
                <div id='results-container'>
                    <div id='artists-container'>
                        <h2>Artists</h2>
                        {displayArtists}
                    </div>
                    <div id='songs-container'>
                        <h2>Songs</h2>
                        {displayTracks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header