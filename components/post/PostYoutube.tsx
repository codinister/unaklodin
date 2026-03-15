import YouTube, { YouTubeProps } from 'react-youtube';
const getYouTubeID = require('get-youtube-id');

type UR = {
  url: string;
  width: string;
  height: string;
};

const PostYoutube = ({ url, width, height }: UR) => {

  const VIDEO_WIDTH = width;
  const VIDEO_HEIGHT = height;

  const opts: YouTubeProps['opts'] = {
    height: VIDEO_HEIGHT,
    width: VIDEO_WIDTH,
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
