import { useEffect, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
const getYouTubeID = require('get-youtube-id');

type UR = {
  url: string;
};

const Youtubebox = ({ url }: UR) => {


  const [getHeight, setHeight] = useState('500');

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('270');
    }
  }, []);


  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
    event.target.mute();
  };

  const onPlayerEnd: YouTubeProps['onEnd'] = (event) => {
    event.target.playVideo();
  };



  const opts: YouTubeProps['opts'] = {
    height: getHeight,
    width: '100%',
    mute: 1,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
      loop: 1,
      start: 1,
    },
  };

  if (url) {
    return (
      <div className="youtubebox">
        <YouTube
          videoId={getYouTubeID(url)}
          opts={opts}
          onReady={onPlayerReady}
          onEnd={onPlayerEnd}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Youtubebox;
