import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import {VideoControlsContext} from "../../context/index";
import {TimingToolsContext} from "../../context/index";
import {timeout} from "../../services/timing-tools/timeout";

const PlayStopButton = () => {
  const {isPlaying, setIsPlaying, resetTimeline} = useContext(VideoControlsContext)
  const {bar, setBar, bpm, setBPM, timeoutBars, setTimeout} = useContext(TimingToolsContext);

  //const onStartPlayingCallbacks = [()=>timeout(timeoutBars, bpm, bar)];

  const handleButtonClick = () => {
    if (!isPlaying){
      resetTimeline();
      timeout(timeoutBars, bpm, bar);
      /*for (let callback of onStartPlayingCallbacks){
        callback();
      }*/
    }

    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleButtonClick}
      startIcon={isPlaying ? <StopIcon /> : <PlayArrowIcon />}
    >
      {isPlaying ? 'Stop' : 'Re-Play'}
    </Button>
  );
};

export default PlayStopButton;
