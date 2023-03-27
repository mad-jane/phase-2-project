import React from "react";

function Navbar() {
    
    return(
        <header className="navbar">
            <nav>
                <ul className="navlinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Songs</a></li>
                    <li><a href="#">Artists</a></li>
                    <li><a href="#">Top 50 Songs</a></li>
                    <li><a href="#">Top 50 Artists</a></li>
                </ul>
            </nav>
    </header>
    )
}

export default Navbar;