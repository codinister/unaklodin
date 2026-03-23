'use client';

import {
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
  excerpt?: string;
}


const ShareButtons = ({ url, title, excerpt }: ShareButtonsProps) => {
  const text = excerpt || title;

  // Generate share links manually
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex gap-2 mt-4">
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <FacebookIcon size={40} round />
      </a>

      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <TwitterIcon size={40} round />
      </a>

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon size={40} round />
      </a>

      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <LinkedinIcon size={40} round />
      </a>
    </div>
  );
};

export default ShareButtons;