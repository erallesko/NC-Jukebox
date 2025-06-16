import Balance from "../components/Balance";
import Header from "../components/Header"
import PlayCounts from "../components/PlayCounts";
import Songs from "../components/Songs";


const App = () => {
  const playListTitle = "My cool playlist";
  const songs = [
    {
      id: 1,
      title: "Dreams",
      artist: "Fleetwood Mac",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
      previewURL:
        "https://open.spotify.com/embed/track/0ofHAoxe9vBkTCp2UQIavz?utm_source=generator",
    },
    {
      id: 2,
      title: "Don't stop me now",
      artist: "Queen",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/9/97/Queen-dont-stop-me-now-1979-6-s.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7?utm_source=generator",
    },
    {
      id: 3,
      title: "Enter Sandman",
      artist: "Metallica",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/5sICkBXVmaCQk5aISGR3x1?utm_source=generator",
    },
    {
      id: 4,
      title: "Sledgehammer",
      artist: "Peter Gabriel",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/Sledgehammer_Cover.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/029NqmIySn1kOY305AAhxT?utm_source=generator",
    },
  ];
  const playCounts = {
    Dreams: 10,
    "Enter Sandman": 5,
    "Don't stop me now": 8,
    Sledgehammer: 11,
  };
  const currentlyPlaying = 0;


  return (
    <div className="App">
      < Header playListTitle={playListTitle} />

      < Songs songs={songs} currentlyPlaying={currentlyPlaying} />

      <PlayCounts playCounts={playCounts}/>

      <Balance/>
      
    </div>
  );
};

export default App;
