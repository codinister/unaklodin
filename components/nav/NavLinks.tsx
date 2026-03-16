'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';
import Links from './Links';
import Logo from './Logo';
import { FaAngleRight } from 'react-icons/fa6';
import useDispatchselector from '@/state/redux/useDispatchselector';

const NavLinks = ({
  closeMenu,
  clss,
}: {
  closeMenu: Function;
  clss: string;
}) => {
  const { selector } = useDispatchselector();

  const mencat = selector((state) => state.menSlice);
  const womencat = selector((state) => state.womenSlice);
  const unisexcat = selector((state) => state.unisexSlice);

  const cats = [
    {
      link: 'Men',
      sub: mencat.cat,
    },
    {
      link: 'Unisex',
      sub: unisexcat.cat,
    },
    {
      link: 'Women',
      sub: womencat.cat,
    },
  ];

  return (
    <div>
      <div className="p-6">
        <Logo onClick={()=> closeMenu(false)} 
        height={190} width={200} />
      </div>

      <ul className={clss}>
        {cats.map((v: { link: string; sub: unknown[] }, k: number) => {
          const lnk = v.link.toLowerCase().split(' ').join('');

          return v.sub.length > 0 ? (
            <li key={k}>
              <Link href="#">
                {v.link} <FaAngleRight />
              </Link>
              <ul>
                <li className="bg-gray-100 p-1 mb-3">
                  <Link onClick={()=> closeMenu(false)} href={`/${lnk}`}>View All {v?.link}</Link>
                </li>
                {v.sub.map((v: any, ky: number) => (
                  <Links
                    setOpen={closeMenu}
                    key={ky}
                    url={lnk + `/${v}`}
                    name={v}
                  />
                ))}
              </ul>
            </li>
          ) : (
            ''
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
