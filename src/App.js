import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {React, useState, useRef } from 'react'
import ReactPlayer from 'react-player/youtube'
import YouTubeUrlInput from "./components/VideoUrlInput"
import VolumeSlider from "./components/video-navs/VolumeSlider"
import PlayStopButton from "./components/video-navs/PlayStopButton"
import {VideoControlsContext, TimingToolsContext} from "./context/index"
import "./styles/App.css"
import TimingContainer, {DEFAULT_BAR, DEFAULT_BPM} from "./components/timing-tools/TimingContainer"
import {timeout, getTimeoutDurationPerBar} from "./services/timing-tools/timeout"


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [volume, setVolume] = useState(100);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  // timeout
  const [bar, setBar] = useState(DEFAULT_BAR);
  const [bpm, setBPM] = useState(DEFAULT_BPM);
  const [timeoutBars, setTimeout] = useState(DEFAULT_BAR);

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
        <TimingToolsContext.Provider value = {{bar, setBar, bpm, setBPM, timeoutBars, setTimeout}}>
          <YouTubeUrlInput className="YouTubeUrlInput" onEnter={handleUrlEnter} />
          <ReactPlayer ref={playerRef} url={videoUrl} volume={volume / 100} playing={isPlaying} />
          <VolumeSlider/>
          <PlayStopButton/>
          <TimingContainer/>
        </TimingToolsContext.Provider>
      </VideoControlsContext.Provider>
    </div>
  );
}

export default App;
