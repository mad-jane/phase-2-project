import React from "react";
import {Link} from 'react-router-dom'

function Navbar({searchKey, token}) {
    
    return(
        <header className="navbar">
            <nav>
                <ul className="navlinks">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/track"><li>Tracks</li></Link>
                    <Link to="/artists"><li>Artists</li></Link>
                    <Link to='/top_tracks'><li>Top 50 Songs</li></Link>
                    <Link to='/genres'><li>Genres</li></Link>
                </ul>
            </nav>
    </header>
    )
}


// <TopTracks token={token} searchKey={searchKey}/>

export default Navbar;