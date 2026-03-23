'use client';

import AboutWidget from './AboutWidget';
import Ads from './Ads';
import BannersWidget from './BannersWidget';
import FeaturedVideo from './FeaturedVideo';
import MenWidget from './MenWidget';

const PostSidebar = () => {
  return (
    <>
      <Ads />
      <AboutWidget />
      <FeaturedVideo />
      <MenWidget />
      <BannersWidget />
      <iframe
        className="mb-10"
        src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25663282"
        width="100%"
        height="500px"
      ></iframe>
    </>
  );
};

export default PostSidebar;
