const Header = ({logo, clientId, redirectURI, authEndpoint, responseType, token, logout}) => {
    return (
        <div>
        <header className="App-header">
            <img src={logo} alt='audio-house-logo'></img>
            {!token ?
                <a href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`}>Login
                    to Spotify</a>
                : <button onClick={logout}>Logout</button>}
        </header>
        </div>
    )
}

export default Header