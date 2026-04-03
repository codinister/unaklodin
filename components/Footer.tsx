'use client';

import Link from 'next/link';
import Logo from './nav/Logo';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import useGetQuery from '@/state/query/useGetQuery';
import { useEffect } from 'react';
import { menThunk } from '@/state/redux/reducers/menSlice';
import { FaRegEnvelope } from "react-icons/fa";


import useDispatchselector from '@/state/redux/useDispatchselector';
import { womenThunk } from '@/state/redux/reducers/womenSlice';
import { unisexThunk } from '@/state/redux/reducers/unisexSlice';
import { BsTelephone } from 'react-icons/bs';
import { accessoriesThunk } from '@/state/redux/reducers/accessoriesSlice';
import { addCurrency } from '@/state/redux/reducers/defaultCurrency';

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
    <footer className="px-6 sm:px-0 py-10 bg-secondary text-white">
      <div className="cont mx-auto flex-wrap flex  flex-row gap-10">
        <div className="sm:flex-1">
          <h6 className="font-bold">TOP CATEGORIES</h6>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>
              <Link href="/men">Men's Wear</Link>
            </li>
            <li>
              <Link href="/women">Women's Wear</Link>
            </li>
            <li>
              <Link href="/unisex">Unisex</Link>
            </li>
          </ul>
        </div>
        <div className=" sm:flex-1">
          <h6 className="font-bold">Help</h6>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>
              <Link href="/policies/help">Need Help?</Link>
            </li>

            <li>
              <Link href="/policies/delivery">Delivery</Link>
            </li>
            <li>
              <Link href="/policies/returns">Returns</Link>
            </li>
            <li>
              <Link href="/policies/services">In Store Services</Link>
            </li>
            <li>
              <Link href="/policies/payments">Secure Payments</Link>
            </li>
            <li>
              <Link href="/policies/terms">Terms & Conditions of Sales</Link>
            </li>
          </ul>
        </div>
        <div className="sm:flex-1">
          <h6 className="font-bold">About Us</h6>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>
              <Link href="/about">Our Story</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>

          <ul className="mt-6 text-white">
            <li className="flex gap-4 mb-4">
              <BsTelephone className="text-2xl" />
              <span>{sett[0]?.phone1}</span>
            </li>
            <li className="flex gap-4">

              <FaRegEnvelope className="text-2xl text-white" />
              <span>sales@unaklodin.com</span>
            
            </li>
          </ul>
        </div>
        <div className="w-38 sm:flex-1">
          <h6 className="font-bold">Our Blog</h6>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Events</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-10 cont py-7 border-t-2 border-b-2 border-t-white border-b-white mx-auto flex  flex-row sm:justify-center justify-start">
        <div>
          <h6 className="font-bold">Follow UNA Klodin</h6>
          <div className="mt-6 flex justify-center gap-10 ">
            <a
              target="_blank"
              className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center"
              href={sett[0] ? sett[0]?.facebook : ''}
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center"
              href={sett[0] ? sett[0]?.instagram : ''}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="cont  mx-auto items-start sm:items-center sm:justify-center  flex flex-col sm:flex-row gap-6 text-white/70">
        <Logo height={190} width={200} />
        <Link href="/policies/terms">Terms and Conditions of Sale</Link>
        <Link href="/policies/payments">Secure payments</Link>
        <Link href="/policies/returns">Returns & Refunds</Link>
      </div>
    </footer>
  );
};

export default Footer;
