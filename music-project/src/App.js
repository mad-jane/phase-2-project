import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import logo from '../transparent 2 audio house.png'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import TopTracks from './components/TopTracks';
import Genres from './components/Genres';
import LikedSongs from './components/LikedSongs';


function App() {
    
    const CLIENT_ID = "d7a2390fb70f40daabcd0b4e18015d30"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [login, setLogin] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [likedSongs, setLikedSongs] = useState([])
    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])

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
        params.append("type", ["track", "artist"])
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${login}`
            },
            params: params
        })
        
        setArtists(data.artists.items)
        setTracks(data.tracks.items)
    }

    function handleLikeClick(track) {
        console.log(track)
        if(!likedSongs.includes(track)) {
            const updateLikedSongs = [...likedSongs, track]
            setLikedSongs(updateLikedSongs)
        } else if (likedSongs.includes(track)) {
            const updateLikedSongs = likedSongs.filter((listItem) => track.id !== listItem.id)
        setLikedSongs(updateLikedSongs)
        }
    }

    // const renderSearch = () => {
    //     return search.map(result => (
    //             <div key={result.id}>
    //                 {result.images?.length ? <img width={"30%"} src={result.images[0].url} alt=""/> : <div>**No Image**</div>}
    //                 <br/>
    //                 {result.name}<button onClick={() => handleLikeClick(result)}>Like!</button>
    //                 <br/>
    //                 {result.preview_url?.length ? <audio src={result.preview_url} controls /> : null}
    //             </div>
    //     ))
    // }


    return (
        <div className="App">
            <Navbar
            clientId={CLIENT_ID} 
            redirectURI={REDIRECT_URI} 
            authEndpoint={AUTH_ENDPOINT} 
            responseType={RESPONSE_TYPE} 
            token={login} 
            logout={logout}
            />
            <Routes>
                <Route path="/liked_songs" element={<LikedSongs handleLikeClick={handleLikeClick}
                likedSongs={likedSongs}
                />}/>
                <Route path="/top_tracks" element={<TopTracks token={login} handleLikeClick={handleLikeClick}/>}/>
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
                tracks={tracks}
                artists={artists}
                handleLikeClick={handleLikeClick}
                />} />
            </Routes>
        </div>
    );
}

export default App;