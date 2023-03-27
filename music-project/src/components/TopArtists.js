
function TopArtists({token}) {
    
// async function fetchWebApi(endpoint, method, body) {
//     const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//     Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//     });
//     return await res.json();
// }

// async function getTopTracks(){
//     const topTracks = await getTopTracks();
//     console.log(
//         topTracks?.map(
//         ({name, artists}) =>
//             `${name} by ${artists.map(artist => artist.name).join(', ')}`
//         )
//     );
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//     return (await fetchWebApi(
//     'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
//     )).items;
// }

// const renderTopTracks = () => {
//     return topTracks.map(track => (
//         <div key={track.id}>
//             {track.images.length ? <img width={"30%"} src={track.images[0].url} alt=""/> : <div>**No Image**</div>}
//             <br/>
//             {track.name}
//         </div>
//     ))
// }


//     return(
//         <div>
//             {getTopTracks()}
//         </div>
//     )
}

export default TopArtists;