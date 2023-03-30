import axios from "axios"
import { useEffect, useState } from "react"
import Track from './Track'

const TopTracks = ({token, handleLikeClick}) => {

    useEffect(() => {
        top50Tracks()
    }, [])
    
    const [topTracks, setTopTracks] = useState([])

    const top50Tracks = async () => {
        const data = await axios.get("https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF", {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
        },
    })
    setTopTracks(data.data.tracks.items)
    }

    const renderTopTracks = () => {
        return topTracks.map((track) => {
            return (
                <Track key={track.track.id} track={track.track} handleLikeClick={handleLikeClick}/>
                )
        })
    }

    return (
        <div className="top-tracks-container">
            <h1 className="top-tracks-title">Global Top 50</h1>
            <ol className='track-list'>
                {renderTopTracks()}
            </ol>
        </div>
    )
}


export default TopTracks;