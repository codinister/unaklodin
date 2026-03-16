import { useEffect, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
const getYouTubeID = require('get-youtube-id');

type UR = {
  url: string;
};

const PostYoutube = ({ url}: UR) => {

  const [getHeight, setHeight] = useState('400');

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('200');
    }
  }, []);




  const opts: YouTubeProps['opts'] = {
    height: getHeight,
    width: '100%',
    mute: 1,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      disablekb: 0,
      fs: 1,
      rel: 0,
      loop: 0,
      start: 0,
    },
  };

  if (url) {
    return (
      <div className="youtubebox">
        <YouTube
          videoId={getYouTubeID(url)}
          opts={opts}
      
        />
      </div>
    );
  } else {
    return null;
  }
};

export default PostYoutube
