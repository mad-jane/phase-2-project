import React from "react";
import TopTracks from "./TopTracks";
import {Link} from 'react-router-dom'

function Navbar({searchKey, token}) {
    
    return(
        <header className="navbar">
            <nav>
                <ul className="navlinks">
                    <Link href="#"><li>Home</li></Link>
                    <Link href="#"><li>Songs</li></Link>
                    <Link href="#"><li>Artists</li></Link>
                    <Link to='/top_tracks' > <li>Top 50 Songs</li></Link>
                    <Link><li>Top 50 Artists</li></Link>
                </ul>
            </nav>
    </header>
    )
}


// <TopTracks token={token} searchKey={searchKey}/>

export default Navbar;