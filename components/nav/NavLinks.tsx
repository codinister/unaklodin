'use client';

import Link from 'next/link';
import Links from './Links';
import Logo from './Logo';
import { FaAngleRight } from 'react-icons/fa6';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { motion } from 'motion/react';
import {
  fadeLeft,
  fadeLeftCustom,
  fadeRight,
  fadeUp,
  staggerChildren,
} from '@/variants/variants';

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
  const accessoriescat = selector((state) => state.accessoriesSlice);

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
    {
      link: 'Accessories',
      sub: accessoriescat.cat,
    },
  ];

  return (
    <div>
      <motion.div
        className="p-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <Logo onClick={() => closeMenu(false)} height={190} width={200} />
      </motion.div>

      <motion.ul
        className={clss}
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
      >
        {cats.map((v: { link: string; sub: unknown[] }, k: number) => {
          const lnk = v.link.toLowerCase().split(' ').join('');
          const mainlink =
            v.sub.length === 0 ? '/' + v.link.toLowerCase() : '#';

          return (
            <motion.li
              key={k}
              custom={(Number(k) + 1) * 0.1}
              variants={fadeLeftCustom}
            >
              <Link
                href={mainlink}
                onClick={() => closeMenu(v.sub.length > 0 ? true : false)}
              >
                {v.link} {v.sub.length > 0 ? <FaAngleRight /> : ''}
              </Link>
              {v.sub.length > 0 ? (
                <motion.ul
                  className="overflow-hidden"
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                >
                  <li className="bg-gray-100 p-1 mb-3">
                    <Link onClick={() => closeMenu(false)} href={`/${lnk}`}>
                      View All {v?.link}
                    </Link>
                  </li>
                  {v.sub.map((v: any, ky: number) => (
                    <Links
                      ky={ky}
                      key={ky}
                      setOpen={closeMenu}
                      url={lnk + `/${v}`}
                      name={v}
                    />
                  ))}
                </motion.ul>
              ) : (
                ''
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default NavLinks;
