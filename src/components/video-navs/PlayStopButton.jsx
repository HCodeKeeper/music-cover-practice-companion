import React, { useContext, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import {VideoControlsContext} from "../../context/index";
import {TimingToolsContext} from "../../context/index";
import {timeout} from "../../services/timing-tools/timeout";
import Metronome from "../../services/timing-tools/metronome"

const PlayStopButton = () => {
  const {isPlaying, setIsPlaying, resetTimeline} = useContext(VideoControlsContext)
  const {bar, setBar, bpm, setBPM, timeoutBars, setTimeout} = useContext(TimingToolsContext);
  const metronome = useRef(new Metronome(bpm, bar));
  let isPlayingPlayerUnbonded = false;

  const handleButtonClick = async () => {
    //prev isPlaying state
    if (!isPlayingPlayerUnbonded){
      isPlayingPlayerUnbonded = !isPlayingPlayerUnbonded;
      resetTimeline();
      metronome.current.bpm = bpm;
      metronome.current.rhythm = bar;
      metronome.current.start();
      await timeout(timeoutBars, bpm, bar);
      setIsPlaying(() => true);
    } else{
      isPlayingPlayerUnbonded = !isPlayingPlayerUnbonded;
      metronome.current.stop();
      setIsPlaying(() => false);
    }
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
