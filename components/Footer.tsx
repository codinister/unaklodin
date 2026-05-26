'use client';

import Link from 'next/link';
import Logo from './nav/Logo';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import useGetQuery from '@/state/query/useGetQuery';
import { useEffect } from 'react';
import { menThunk } from '@/state/redux/reducers/menSlice';
import { FaRegEnvelope } from 'react-icons/fa';

import useDispatchselector from '@/state/redux/useDispatchselector';
import { womenThunk } from '@/state/redux/reducers/womenSlice';
import { unisexThunk } from '@/state/redux/reducers/unisexSlice';
import { BsTelephone } from 'react-icons/bs';
import { accessoriesThunk } from '@/state/redux/reducers/accessoriesSlice';
import { addCurrency } from '@/state/redux/reducers/defaultCurrency';
import { motion } from 'motion/react';
import { fadeLeftCustom, staggerChildren } from '@/variants/variants';

const Footer = () => {
  const { dispatch, selector } = useDispatchselector();
  const sett = useGetQuery('settings', '/v1/settings') || [];

  const cur = selector((state) => state.curSlice);
  const currency = cur.currency;

  useEffect(() => {
    dispatch(menThunk());
    dispatch(womenThunk());
    dispatch(unisexThunk());
    dispatch(accessoriesThunk());

    const settCur = sett[0]?.currency;

    const defCur = currency ? currency : settCur;
    dispatch(addCurrency(defCur));
  }, [dispatch, sett, currency]);

  return (
    <footer className="px-6 sm:px-0 py-10 bg-secondary text-white overflow-hidden">
      <div className="cont mx-auto flex-wrap flex  flex-row gap-10">
        <div className="sm:flex-1">
          <h6 className="font-bold">TOP CATEGORIES</h6>
          <motion.ul
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 0.3,
              once: true,
            }}
            className="mt-6 space-y-3 text-white/70"
          >
            <motion.li custom={0.1} variants={fadeLeftCustom}>
              <Link href="/men">Men's Wear</Link>
            </motion.li>
            <motion.li custom={0.2} variants={fadeLeftCustom}>
              <Link href="/women">Women's Wear</Link>
            </motion.li>
            <motion.li custom={0.3} variants={fadeLeftCustom}>
              <Link href="/unisex">Unisex</Link>
            </motion.li>
          </motion.ul>
        </div>

        <div className=" sm:flex-1">
          <h6 className="font-bold">Help</h6>
          <motion.ul
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 0.3,
              once: true,
            }}
            className="mt-6 space-y-3 text-white/70"
          >
            <motion.li custom={0.1} variants={fadeLeftCustom}>
              <Link href="/policies/help">Need Help?</Link>
            </motion.li>

            <motion.li custom={0.2} variants={fadeLeftCustom}>
              <Link href="/policies/delivery">Delivery</Link>
            </motion.li>
            <motion.li custom={0.3} variants={fadeLeftCustom}>
              <Link href="/policies/returns">Returns</Link>
            </motion.li>
            <motion.li custom={0.4} variants={fadeLeftCustom}>
              <Link href="/policies/services">In Store Services</Link>
            </motion.li>
            <motion.li custom={0.5} variants={fadeLeftCustom}>
              <Link href="/policies/payments">Secure Payments</Link>
            </motion.li>
            <motion.li custom={0.6} variants={fadeLeftCustom}>
              <Link href="/policies/terms">Terms & Conditions of Sales</Link>
            </motion.li>
          </motion.ul>
        </div>

        <div className="sm:flex-1">
          <h6 className="font-bold">About Us</h6>
          <motion.ul
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 0.3,
              once: true,
            }}
            className="mt-6 space-y-3 text-white/70"
          >
            <motion.li custom={0.1} variants={fadeLeftCustom}>
              <Link href="/about">Our Story</Link>
            </motion.li>
            <motion.li custom={0.2} variants={fadeLeftCustom}>
              <Link href="#">Contact Us</Link>
            </motion.li>
          </motion.ul>

          <motion.ul
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 0.3,
              once: true,
            }}
            className="mt-6 text-white"
          >
            <motion.li
              className="flex gap-4 mb-4"
              custom={0.1}
              variants={fadeLeftCustom}
            >
              <BsTelephone className="text-2xl" />
              <span>{sett[0]?.phone1}</span>
            </motion.li>
            <motion.li
              className="flex gap-4"
              custom={0.2}
              variants={fadeLeftCustom}
            >
              <FaRegEnvelope className="text-2xl text-white" />
              <span>sales@unaklodin.com</span>
            </motion.li>
          </motion.ul>
        </div>

        <div className="w-38 sm:flex-1">
          <h6 className="font-bold">Our Blog</h6>
          <motion.ul
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 0.3,
              once: true,
            }}
            className="mt-6 space-y-3 text-white/70"
          >
            <motion.li custom={0.1} variants={fadeLeftCustom}>
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li custom={0.2} variants={fadeLeftCustom}>
              <Link href="/blog">Events</Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>

      <div className="my-10 cont py-7 border-t-2 border-b-2 border-t-white border-b-white mx-auto flex  flex-row sm:justify-center justify-start">
        <div>
          <h6 className="font-bold">Follow UNA Klodin</h6>

          <motion.div
            className="mt-6 flex justify-center gap-10 "
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 0.3,
              once: true,
            }}
          >
            <motion.a
              custom={0.2}
              variants={fadeLeftCustom}
              target="_blank"
              className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center"
              href={sett[0] ? sett[0]?.facebook : ''}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              custom={0.2}
              variants={fadeLeftCustom}
              target="_blank"
              className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center"
              href={sett[0] ? sett[0]?.instagram : ''}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="cont  mx-auto">
        <motion.ul
        className=" items-start sm:items-center sm:justify-center  flex flex-col sm:flex-row gap-6 text-white/70"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.3,
            once: true,
          }}
        >
          <motion.li custom={0.1} variants={fadeLeftCustom}>
            <Logo height={190} width={200} />
          </motion.li>
          <motion.li custom={0.2} variants={fadeLeftCustom}>
            <Link href="/policies/terms">Terms and Conditions of Sale</Link>
          </motion.li>
          <motion.li custom={0.3} variants={fadeLeftCustom}>
            <Link href="/policies/payments">Secure payments</Link>
          </motion.li>
          <motion.li custom={0.4} variants={fadeLeftCustom}>
            <Link href="/policies/returns">Returns & Refunds</Link>
          </motion.li>
        </motion.ul>
      </div>
    </footer>
  );
};

export default Footer;
