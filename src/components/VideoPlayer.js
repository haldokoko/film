import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({video}) => {
    const opts = {
        height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        }
      };

      return (
        <YouTube
          videoId={video.key}
          opts={opts}
        />
      );
    };


export default VideoPlayer;