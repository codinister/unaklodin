'use client';

import Link from 'next/link';
import Logo from './nav/Logo';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import useGetQuery from '@/state/query/useGetQuery';

const Footer = () => {

  const sett = useGetQuery('settings', '/settings') || [];



  return (
    <footer className="px-6 sm:px-0 py-10 bg-secondary text-white">
      <div className="container mx-auto flex-wrap flex  flex-row gap-10">
        <div className="w-38 sm:flex-1">
          <h4 className="font-extrabold">TOP CATEGORIES</h4>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>
              <Link href="/">Men Category</Link>
            </li>
            <li>
              <Link href="/">Women Category</Link>
            </li>
            <li>
              <Link href="/">Unisex Category</Link>
            </li>
          </ul>
        </div>
        <div className="w-38 sm:flex-1">
          <h4 className="font-extrabold">Help</h4>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>
              <Link href="">Delivery</Link>
            </li>
            <li>
              <Link href="">Returns</Link>
            </li>
            <li>
              <Link href="">In Store Services</Link>
            </li>
            <li>
              <Link href="">Secure Payments</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="w-38 sm:flex-1">
          <h4 className="font-extrabold">About Us</h4>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>
              <Link href="">Our Story</Link>
            </li>
            <li>
              <Link href="">Terms & Conditions of Sales</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="w-38 sm:flex-1">
          <h4 className="font-extrabold">Our Blog</h4>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">FAQ</Link>
            </li>
            <li>
              <Link href="">Events</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-10 container py-7 border-t-2 border-b-2 border-t-white border-b-white mx-auto flex  flex-row sm:justify-center justify-start">
        <div>
          <h4 className="font-extrabold">Follow UNA Klodin</h4>
          <div className="mt-6 flex gap-10 ">
            <Link className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center" href={sett[0] ? sett[0]?.facebook : ''}>
              <FaFacebookF />
            </Link>
            <Link  className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center"  href={sett[0] ? sett[0]?.instagram : ''}>
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="container  mx-auto items-start sm:items-center sm:justify-center  flex flex-col sm:flex-row gap-6 text-white/70">
        <Logo height={190} width={200} />
        <Link href="">Terms of Use</Link>
        <Link href="">Terms and Conditions of Sale</Link>
        <Link href="">Secure payments</Link>
        <Link href="">Counterfeit Reporting</Link>
      </div>
    </footer>
  );
};

export default Footer;
