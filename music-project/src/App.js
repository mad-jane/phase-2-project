import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';


function App() {
    
    const CLIENT_ID = "d7a2390fb70f40daabcd0b4e18015d30"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [songs, setSongs] = useState([])
    // const [categories, setCategories] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async () => {
        // e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
    
        setArtists(data.artists.items)
    }

    const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"30%"} src={artist.images[0].url} alt=""/> : <div>**No Image**</div>}
            <br/>
            {artist.name}
        </div>
    ))
}

const searchSongs = async () => {
    // e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/tracks", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "track"
        }
    })

    setSongs(data.songs.items)
}

const renderSongs = () => {
return songs.map(song => (
    <div key={song.id}>
        {song.images.length ? <img width={"30%"} src={song.images[0].url} alt=""/> : <div>**No Image**</div>}
        <br/>
        {song.name}
    </div>
))
}

// const searchGenres = async (e) => {
//     e.preventDefault()
//     const {data} = await axios.get("https://api.spotify.com/v1/browse/categories", {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//         params: {
//             q: searchKey,
//             type: "category"
//         }
//     })

//     setCategories(data.categories.items)
// }

// const renderGenres = () => {
// return categories.map(category => (
//     <div key={category.id}>
//         {category.name}
//     </div>
// ))
// }

const handleSubmit = () => {
    searchArtists()
    searchSongs()
}

    return (
        <div className="App">
            <header className="App-header">
                <h1>Search Music</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>
                    {/* <form onSubmit={searchSongs}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>
                    <form onSubmit={searchGenres}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form> */}
                    {/* {renderGenres()} */}
                    {renderSongs()}
                    {renderArtists()}
            </header>
        </div>
    );
}

export default App;