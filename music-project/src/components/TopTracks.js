import axios from "axios"
import { useEffect, useState } from "react"

const TopTracks = ({searchKey, token}) => {

    const [topTracks, setTopTracks] = useState([])

    const top50Tracks = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "track"
        }
    })
    setTopTracks(data.songs.items)
    }

    useEffect(() => {
        top50Tracks()
    }, [])


    const renderTopTracks = () => {
        return topTracks.map(track => (
            <div key={track.id}>
                {track.images.length ? <img width={"30%"} src={track.images[0].url} alt=""/> : <div>**No Image**</div>}
                <br/>
                {track.name}
            </div>
        ))
    }

    return (
        <div>
            {renderTopTracks()}
        </div>
    )
}


export default TopTracks;