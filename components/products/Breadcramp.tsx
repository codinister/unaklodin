'use client';

import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

const Breadcramp = ({
  page_title,
  link='',
  link_name='',
}: {
  link: string;
  link_name: string;
  page_title: string;
}) => {
  return (
    <div className='mb-10'>
      <div className="mb-4 flex gap-3">
        <Link href="/">Home</Link>
        <FaAngleRight />
        <Link href={link}>{link_name}</Link>
      </div>
      <h2>{page_title}</h2>
    </div>
  );
};

export default Breadcramp;
