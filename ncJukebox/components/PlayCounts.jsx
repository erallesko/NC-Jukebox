export default function PlayCounts ({playCounts}) {

    const songs = [];
    const timesPlayed = [];
    let total = 0;

    for (let song in playCounts) {
        songs.push(song);
        timesPlayed.push(playCounts[song]);
        total += playCounts[song]
    };

    
    return <div>

        {songs.map((song, index) => {
            return <p key={song}>Song : {song} / Times played : {timesPlayed[index]} </p>
        })}

        <p>Total songs played : {total} </p>
          </div>
    
}