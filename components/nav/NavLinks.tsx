'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';
import Links from './Links';
import Logo from './Logo';
import { FaAngleRight } from "react-icons/fa6";

const NavLinks = ({closeMenu}: {closeMenu: Function}) => {
  const cats = useGetQuery('cats', '/cats');

  console.log(cats)

  return (
    <div>
      <div className="p-6">
           <Logo height={190} width={200} />
      </div>

      <ul className="menus">
        {cats.map((v: { link: string; sub: {}[] }, k: number) => {
const lnk = v.link.toLowerCase().split(' ').join('')


          return v.sub.length > 0 ? (
            <li key={k}>
              <Link href="#">{v.link}  <FaAngleRight /></Link>
              <ul>
                {v.sub.map((v: any, ky: number) => (
                  <Links setOpen={closeMenu} key={ky} url={lnk+`/${v}`} name={v} />
                ))}
              </ul>
            </li>
          ) : '';
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
