
const Header = ({logo, clientId, redirectURI, authEndpoint, responseType, token, logout, searchResults, setSearchKey, renderSearch}) => {
    return (
        <div>
        <header className="App-header">
            <img src={logo} alt='audio-house-logo'></img>
            {!token ?
                <a href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`}>Login
                    to Spotify</a>
                : <button onClick={logout}>Logout</button>}
        </header>
        <div>
                <h1>Search Music</h1>
                <form onSubmit={(e) => searchResults(e)}>
                    <input type="text" placeholder="Search Songs and Artists" onChange={e => setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                    {renderSearch()}
                </form>
            </div>
        </div>
    )
}

export default Header