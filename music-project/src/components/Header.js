
const Header = ({logo, clientId, redirectURI, authEndpoint, responseType, token, logout, searchResults, setSearchKey, renderSearch}) => {
    return (
        <div>
            <div className="app-header">
                <img className="logo" src={logo} alt='audio-house-logo'></img>
                {!token ?
                    <a className="login-button" href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`}>Login</a>
                    : <button onClick={logout} className="login-button">Logout</button>}
            </div>
            <div className="search-section">
                <h1 className="search-title">Search Music</h1>
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