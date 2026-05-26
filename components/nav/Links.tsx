import Link from 'next/link';
import { motion } from 'motion/react';

const Links = ({
  name,
  url,
  setOpen,
  ky
}: {
  name: string;
  url: string;
  setOpen: Function;
  ky: number
}) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          delay: (Number(ky) + 1) * 0.1,
          duration: 0.6,
          ease: 'easeOut',
        },
      }}
    >
      <Link href={`/${url}`} onClick={() => setOpen(false)}>
        {name}
      </Link>
    </motion.li>
  );
};

export default Links;
