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
    <div className='my-10'>
      <div className="mb-2 flex items-center gap-2">
        <Link href="/">Home</Link>
        <FaAngleRight />
        <Link href={link}>{link_name}</Link>
      </div>
      <h6>{page_title}</h6>
    </div>
  );
};

export default Breadcramp;
