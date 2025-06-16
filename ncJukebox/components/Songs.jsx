export default function Songs ({songs, currentlyPlaying}) {

const currentlyPlayingSong = songs[currentlyPlaying].title;



 return   <>
             <ol className="song-list">

            {songs.map((song) => {

            return <li key={song.id} className="song-item"> 
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
            <img src={song.albumCover} alt="image" className="song-img"/>
            </li>

            })}

            </ol>

            <p className="song-current">Currently playing : {currentlyPlayingSong}</p>

         </>
 
           
}