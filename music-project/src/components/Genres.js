import axios from "axios"
import React, { useEffect, useState } from "react"
import Genre from "./Genre"

function Genres({token}) {

    useEffect(() => {
        getGenres()
    }, [])

    const getGenres = async () => {
        const data = await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            },
        })
        setGenres(data.data.genres)
    }

    const [genres, setGenres] = useState([])
    const cutGenres = genres.sort(() => .5 - Math.random()).slice(0, 20);
    
    const renderGenres = () => {
        return cutGenres.map((genre, index) => {
            return (
                <Genre key={index} name={genre}/>
                )
        })
    }

    return(
        <div>
            <h1>Today's Popular Genres</h1>
            <ul>
                {renderGenres()}
            </ul>
        </div>
    )
}

export default Genres;