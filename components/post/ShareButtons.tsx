'use client';

import FacebookShare from '../share/FacebookShare';
import LinkedinShare from '../share/LinkedinShare';
import TwitterShare from '../share/TwitterShare';
import WhatsappShare from '../share/WhatsappShare';

interface ShareButtonsProps {
  url: string;
  title: string;
  excerpt?: string;
}

const ShareButtons = ({ url, title, excerpt }: ShareButtonsProps) => {
  
  const text = excerpt || title;

  return (
    <div className="flex gap-2 mt-4">
      <FacebookShare url={url} />
      <WhatsappShare url={url} />;
      <TwitterShare text={text} url={url} />
      <LinkedinShare url={url} />
    </div>
  );
};

export default ShareButtons;
