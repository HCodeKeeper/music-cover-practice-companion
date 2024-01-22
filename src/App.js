import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {React, useState, useRef } from 'react'
import ReactPlayer from 'react-player/youtube'
import YouTubeUrlInput from "./components/VideoUrlInput"
import VolumeSlider from "./components/video-navs/VolumeSlider"
import PlayStopButton from "./components/video-navs/PlayStopButton"
import {VideoControlsContext} from "./context/index"
import "./styles/App.css"


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [volume, setVolume] = useState(100);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const resetTimeline = () => {
    // Use the seekTo method to reset the timeline to the beginning
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  const handleUrlEnter = (url) => {
    setVideoUrl(url);
  };


  return (
    <div className="App">
      <VideoControlsContext.Provider value = {{videoUrl, setVolume, handleUrlEnter, isPlaying, setIsPlaying, played, setPlayed, resetTimeline}}>
        <YouTubeUrlInput className="YouTubeUrlInput" onEnter={handleUrlEnter} />
        <ReactPlayer ref={playerRef} url={videoUrl} volume={volume / 100} playing={isPlaying} />
        <VolumeSlider/>
        <PlayStopButton/>
      </VideoControlsContext.Provider>
    </div>
  );
}

export default App;
