import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
    
    return(
        <header className="navbar">
            <nav>
                <ul className="navlinks">
                    <Link to="/"><li className="font-bold">Home</li></Link>
                    <Link to="/liked_songs"><li>Liked Songs</li></Link>
                    <Link to='/top_tracks'><li>Top 50 Songs</li></Link>
                    <Link to='/genres'><li>Genres</li></Link>
                </ul>
            </nav>
    </header>
    )
}

export default Navbar;