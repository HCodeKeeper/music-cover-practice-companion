import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import {VideoControlsContext} from "../../context/index"

const PlayStopButton = () => {
  const {isPlaying, setIsPlaying, resetTimeline} = useContext(VideoControlsContext)
  

  const handleButtonClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);

    if (!isPlaying){
      resetTimeline();
    }
    // Add logic for play/pause action here (e.g., start/stop video playback)
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
