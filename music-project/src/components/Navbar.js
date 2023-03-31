import React from "react";
import {Link} from 'react-router-dom'
import logo from '../transparent-2-audio-house.png'

function Navbar({clientId, redirectURI, authEndpoint, responseType, token, logout}) {
    
    return(
        <header className="navbar">
                <img id="navbar-logo" src={logo} alt='logo' />
            <nav>
                <ul className="navlinks">
                    <Link to="/"><li className="font-bold">Home</li></Link>
                    <Link to="/liked_songs"><li>Liked Songs</li></Link>
                    <Link to='/top_tracks'><li>Top 50 Songs</li></Link>
                    <Link to='/genres'><li>Genres</li></Link>
                {!token ?
                    <a className="login-button" href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`}>Login</a>
                    : <button onClick={logout} className="login-button">Logout</button>}
                </ul>
            </nav>
    </header>
    )
}

export default Navbar;