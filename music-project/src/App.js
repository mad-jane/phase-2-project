import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import logo from './assets/transparent_2_audio_house.png'
import Header from './components/Header'
import {Routes, Route, Link} from 'react-router-dom'
import TopTracks from './components/TopTracks';
import Track from './components/Track';
import Artists from './components/Artists';
import TopArtists from './components/TopArtists';


function App() {
    
    const CLIENT_ID = "d7a2390fb70f40daabcd0b4e18015d30"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [login, setLogin] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [search, setSearch] = useState([])
    // const [categories, setCategories] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            // window.location.hash = ""
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
        params.append("type", "artist")
        params.append("type", "track")
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${login}`
            },
            params: params
        })
    
        setSearch(data.artists.items)
        console.log(params)
    }

    const renderSearch = () => {
    return search.map(result => (
        <div key={result.id}>
            {result.images.length ? <img width={"30%"} src={result.images[0].url} alt=""/> : <div>**No Image**</div>}
            <br/>
            {result.name}
        </div>
    ))
}
    

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/track" element={<Track />}/>
                <Route path="/artists" element={<Artists />}/>
                <Route path="/top_tracks" element={<TopTracks token={login}/>}/>
                <Route path="/top_artists" element={<TopArtists token={login}/>}/>
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