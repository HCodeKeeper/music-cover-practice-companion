import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {VideoControlsContext} from "../../context/index"
import { useContext } from 'react';


export default function VolumeSlider() {
  const {setVolume} = useContext(VideoControlsContext);

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={100}
          valueLabelDisplay="auto"
          onChange={(event, value)=>{
            setVolume(value)
          }}
        />
      </Box>
    );
  }