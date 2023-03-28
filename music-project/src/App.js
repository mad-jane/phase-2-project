import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import logo from './assets/transparent_2_audio_house.png'
import Header from './components/Header'
import {Routes, Route, Link} from 'react-router-dom'
import TopTracks from './components/TopTracks';
import Genres from './components/Genres';
import LikedSongs from './components/LikedSongs';


function App() {
    
    const CLIENT_ID = "258f4aee5f9046da98df8bf5f53cd770"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [login, setLogin] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [search, setSearch] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.localStorage.setItem("token", token)
        }
        setLogin(token)
    }, [])

    const logout = () => {
        setLogin("")
        window.localStorage.removeItem("token")
    }

    const searchResults = async (e) => {
        e.preventDefault()
        const params = new URLSearchParams()
        params.append("q", searchKey)
        params.append("type", ["artist", "track"])
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${login}`
            },
            params: params
        })
        const tracksAndArtists = data.artists.items.concat(data.tracks.items)
        setSearch(tracksAndArtists)
        console.log(tracksAndArtists)
    }

    const renderSearch = () => {
    return search.map((result) => {
        if (result.includes("track")) {
            return (
            <div key={result.id}>
                <br/>
                {result.name}<button>Like!</button>
                {result.preview_url?.length ? <audio src={result.preview_url} controls /> : null}
            </div>
        )} else {
            return(
            <div>
                {result.images?.length ? <img width={"30%"} src={result.images[0].url} alt=""/> : <div>**No Image**</div>}
                {result.name}
            </div>
            )
        }
    })
}

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/liked_songs" element={<LikedSongs />}/>
                <Route path="/top_tracks" element={<TopTracks token={login}/>}/>
                <Route path="/genres" element={<Genres token={login}/>}/>
                <Route path="/" element={ <Header 
                logo={logo} 
                clientId={CLIENT_ID} 
                redirectURI={REDIRECT_URI} 
                authEndpoint={AUTH_ENDPOINT} 
                responseType={RESPONSE_TYPE} 
                token={login} 
                logout={logout}
                searchResults={searchResults}
                setSearchKey={setSearchKey}
                renderSearch={renderSearch}
                />} />
            </Routes>
        </div>
    );
}

export default App;