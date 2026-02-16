'use client';

import Link from 'next/link';
import Logo from './nav/Logo';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary text-white">
      <div className="container mx-auto flex gap-10">
        <div className="flex-1">
          <h4 className="font-extrabold">TOP CATEGORIES</h4>
          <ul className="mt-6 space-y-3">
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
        <div className="flex-1">
          <h4 className="font-extrabold">Help</h4>
          <ul className="mt-6 space-y-3">
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
        <div className="flex-1">
          <h4 className="font-extrabold">About Us</h4>
          <ul className="mt-6 space-y-3">
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
        <div className="flex-1">
          <h4 className="font-extrabold">Our Blog</h4>
          <ul className="mt-6 space-y-3">
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
      <div className="container mx-auto flex justify-center">
        <div>
          <h4 className="font-extrabold">Follow UNA Klodin</h4>
          <div>
            <Link href={}>
              <FaFacebookF />
            </Link>

            <Link href={}>
              <FaXTwitter />
            </Link>

            <Link href={}>
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto justify-center flex gap-6">
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
