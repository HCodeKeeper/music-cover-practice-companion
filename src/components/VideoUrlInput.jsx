import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import {VideoControlsContext} from "../context/index"

function isValidYouTubeUrl(url) {
  // YouTube URL pattern
  const youtubePattern = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  return youtubePattern.test(url);
}

function YouTubeUrlInput() {
    const {handleUrlEnter} = useContext(VideoControlsContext);
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const newUrl = event.target.value;
        setUrl(newUrl);

        // Validate the YouTube URL
        if (newUrl && !isValidYouTubeUrl(newUrl)) {
        setError('Invalid YouTube URL');
        } else {
        setError('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && isValidYouTubeUrl(url)) {
        // Call the onEnter callback with the valid URL
        handleUrlEnter(url);
        }
    };

    return (
        <TextField
        label="YouTube Video URL"
        variant="outlined"
        fullWidth
        value={url}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        error={Boolean(error)}
        helperText={error}
        sx={{marginBottom: 20}}
        />
    );
}

export default YouTubeUrlInput;
